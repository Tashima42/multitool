# multitool

## DEV
Install:
* docker
* k3d
* kubectl
* tilt.dev
Run:
* k3d registry create registry.local.tashima.space --port 5345
* k3d cluster create local -p 80:80@loadbalancer -p 443:443@loadbalancer --registry-use k3d-registry.local.tashima.space:5345
* tilt up
