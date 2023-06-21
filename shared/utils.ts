export function isValidAddress(address: string) {
    return address.trim().match(/^(?:\d{1,3}\.){3}\d{1,3}$/) && !address.startsWith("192.168");
}