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

In Azure Portal:
Go to AKS Cluster -> Kubernetes resources -> Services and Ingress -> Create Ingress
Will then request to enable Application Routing add-on, Secret Store CSI driver
Trying to create Ingress again will then guide you to create a Key Vault
The Key Vault will take some time to setup
Next step is to Create Ingress again