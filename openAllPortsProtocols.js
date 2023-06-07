// openAllPortsProtocols.js

module.exports = {
    title: 'Open All Ports Protocols',
    category: 'ECS',
    domain: 'Compute',
    description: 'Ensure that ECS security groups do not have all ports or protocols open to the public',
    more_info: 'Security groups should be created on a per-service basis and avoid allowing all ports or protocols.',
    link: 'https://partners-intl.aliyun.com/help/doc-detail/51170.htm',
    recommended_action: 'Modify the security group to specify a specific port and protocol to allow.',
    apis: ['ECS:DescribeSecurityGroups', 'ECS:DescribeSecurityGroupAttribute', 'STS:GetCallerIdentity'],
    compliance: {
        hipaa: 'HIPAA requires strict access controls to networks and services ' +
                'processing sensitive data. Security groups are the built-in ' +
                'method for restricting access to Alibaba services and should be ' +
                'configured to allow least-privilege access.',
        pci: 'PCI has explicit requirements around firewalled access to systems. ' +
             'Security groups should be properly secured to prevent access to ' +
             'backend services.'
    },
}