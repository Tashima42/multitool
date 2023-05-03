load('ext://helm_resource', 'helm_resource', 'helm_repo')
# Set Namespace
load('ext://namespace', 'namespace_create', 'namespace_inject')
namespace_create('multitool-local')

# Local resource to build the UI dist
local_resource(
  'ui-compile',
  'npm run build',
  dir='./ui',
  deps=['./ui/package.json', './ui/package-lock.json', './ui/src'],
  # labels=["ui"]
)

# Build UI Docker image
docker_build(
  'k3d-registry.local.tashima.space/tashima42/multitool/ui',
  context='.',
  dockerfile='ui/Dockerfile.dev',
  only=['./ui/dist', './ui/nginx.conf'],
  live_update=[
    sync('./ui/dist', '/app'),
    sync('./ui/nginx.conf', '/etc/nginx/nginx.conf'),
  ],
)
k8s_yaml([
  'k8s/local/pocketbase/pocketbase-persistent-volume-claim.yaml', 
  'k8s/local/pocketbase/pocketbase-deployment.yaml', 
  'k8s/local/pocketbase/pocketbase-service.yaml',
  'k8s/local/pocketbase/pocketbase-ingressroute.yaml',
])
k8s_yaml([
  'k8s/local/ui/ui-deployment.yaml',
  'k8s/local/ui/ui-service.yaml',
  'k8s/local/ui/ui-ingressroute.yaml',
])

k8s_resource('pocketbase-deployment')
k8s_resource('ui-deployment')
