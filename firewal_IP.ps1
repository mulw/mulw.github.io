# The following code will add your Kali Linux computer's IP address to the list of allowed inbound connections on port 5985.powershell -NoProfile -WindowStyle Hidden -File <path to script.ps1>


$kaliLinuxIPAddress = "<kali linux ip address>"

$firewallEnabled = $false

# Check if the Windows Firewall is enabled.
if ((Get-WmiObject -Class Win32_Service -Filter "Name='WindowsFirewall'" | Select-Object -ExpandProperty Status).ToLower() -eq "running") {
  $firewallEnabled = $true
}

if ($firewallEnabled) {
  # Add a new inbound firewall rule for port 5985.
  New-NetFirewallRule -Name "Allow Netcat from Kali Linux" -Protocol TCP -LocalPort 5985 -RemoteAddress $kaliLinuxIPAddress -Action Allow

  # Add a new outbound firewall rule for port 5985.
  New-NetFirewallRule -Name "Allow Netcat to Kali Linux" -Protocol TCP -RemotePort 5985 -RemoteAddress $kaliLinuxIPAddress -Action Allow
} else {
  # Windows Firewall is not enabled. Enable it before running the script again.
  Write-Warning "Windows Firewall is not enabled. Please enable it and run the script again."
}
