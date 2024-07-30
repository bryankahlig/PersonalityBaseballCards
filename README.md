![validate](https://github.com/bryankahlig/PersonalityBaseballCards/actions/workflows/ci.yml/badge.svg)

# PersonalityBaseballCards
Combining the lenses of personalities of Myers Briggs and Love Languages, this will create a baseball card for the person you want to know better.

Inspiration:
Ray Dalio's Baseball Cards for Employees

Webpage with a rendering of what one could look like:
https://medium.com/fusion-accelerator/trading-baseball-cards-in-healthcare-70f07a3a0dab

# Project Description

Started with "React and ASP.NET Core" template in Visual Studio 2022

* Server
  * ASP.NET Core 8
* Frontend
  * React

# Activites
Set up AKS cluster

In Terminal Run:
 az aks get-credentials --resource-group PersonalityBaseballCards --name PersonalityBaseballCards
az aks create --resource-group PersonalityBaseballCards --name PersonalityBaseballCards --generate-ssh-keys --tier free
az aks update --resource-group PersonalityBaseballCards --name PersonalityBaseballCards --attach-acr returnonit

kubectl apply -f pbc-aks-deployment.yaml
kubectl apply -f pbc-aks-service.yaml

## Items to note:
* The app deploys where the DotNet Core app is listening on /api and the React app is listening on /.
* The app is listening on port 5299. It can be anything, but it's important to align the port in the container with the port being forwarded at all points in the stack.


In Azure Portal:
Go to AKS Cluster -> Kubernetes resources -> Services and Ingress -> Create Ingress
Will then request to enable Application Routing add-on, Secret Store CSI driver

Trying to create Ingress again will then guide you to create a Key Vault
This is the command used to setup access to the Key Vault:
az role assignment create --role "Key Vault Reader" --assignee bryan.kahlig@returnonit.io --scope /subscriptions/d441e080-fce9-46c2-b6b4-268684a3391a/resourcegroups/baseballcards.dev

Now setup virtual network between AKS and AKV: https://learn.microsoft.com/en-us/troubleshoot/azure/azure-kubernetes/extensions/troubleshoot-key-vault-csi-secrets-store-csi-driver
Set up peering for the virtual network: https://learn.microsoft.com/en-us/troubleshoot/azure/azure-kubernetes/extensions/troubleshoot-key-vault-csi-secrets-store-csi-driver
Set up firewall rules for the Key Vault
May need to come back to this
Next step is to Create Ingress again

Create Ingress Controller for pbc-aks-cluster / Settings / Networking
