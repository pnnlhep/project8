```
kubectl create serviceaccount tiller --namespace kube-system
kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admi
n --serviceaccount=kube-system:tiller
helm init --service-account=tiller
watch helm ls
```

```
helm install stable/nginx-ingress --name=nginx-ingress --namespace kube-system --set \
  controller.service.type=ClusterIP,controller.service.externalIPs[0]=$(minikube ip)

helm install -n project8 project8
```
