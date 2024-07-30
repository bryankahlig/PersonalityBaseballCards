#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 5299
EXPOSE 5173

RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y libpng-dev libjpeg-dev curl libxi6 build-essential libgl1-mesa-glx
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y libpng-dev libjpeg-dev curl libxi6 build-essential libgl1-mesa-glx
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["personalitybaseballcards.client/nuget.config", "personalitybaseballcards.client/"]
COPY ["PersonalityBaseballCards.Server/PersonalityBaseballCards.Server.csproj", "PersonalityBaseballCards.Server/"]
COPY ["personalitybaseballcards.client/personalitybaseballcards.client.esproj", "personalitybaseballcards.client/"]
COPY ["PersonalityBaseballCards.Models/PersonalityBaseballCards.Models.csproj", "PersonalityBaseballCards.Models/"]
RUN dotnet restore "./PersonalityBaseballCards.Server/./PersonalityBaseballCards.Server.csproj"
COPY . .
WORKDIR "/src/PersonalityBaseballCards.Server"
RUN dotnet build "./PersonalityBaseballCards.Server.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./PersonalityBaseballCards.Server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PersonalityBaseballCards.Server.dll"]