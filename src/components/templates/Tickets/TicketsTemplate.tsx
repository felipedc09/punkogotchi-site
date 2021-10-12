import { FC, ReactElement, useEffect } from 'react';
import MainTemplate from '@/components/templates/Main/MainTemplate';
import { Screen, Scanlines, Arm, LoadCharacter, LoadAnimation, LoadMask } from './tickets.styles';
//import { ethers } from 'ethers';

// Define here the functions to be used from the contract
/*const abi = [
  // Read-Only Functions
  "function totalSupply() public view override returns (uint256)",
  "function getTicketPrice() public view returns (uint256)",

  // Authenticated Functions
  "function buyTicket(address buyer, uint256 _idTciket) public payable",
  "function openPrivateSale() public onlyOwner",
  "function openTicketSale() public onlyOwner",
  "function privateSale(address buyer, uint256 _idTciket, bytes32 msgHash, bytes memory signature) public payable",
  "function closePrivateSale() public onlyOwner",
  "function closeTransmutationSells() public onlyOwner",

  // Events
];
// Use this to define the contract ADDRESS
const ADDRESS = "0xD9AA6458F1547198709048065240931b08651a28"
// testnet cryptacho ticket addr 0xD9AA6458F1547198709048065240931b08651a28
// testnet cryptacho 0x03C00085d11f4Bb12294aa2dD12F386ee0F6cc4b
let signer;

// use it to call function to write in contract
let contract_rw;

// use it to call functions to read from contract
let contract_r;
*/
const TicketsTemplate: FC = (): ReactElement => {

  useEffect(() => {
    console.log('use effect start');
    // Update the document title using the browser API
    async function connect() {
      /*const acc = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      console.log(signer, acc);*/
      
      
      
      /*const provider = new ethers.providers.Web3Provider(ethereum, "any");
      // Prompt user for account connections
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      contract_rw = new ethers.Contract(ADDRESS, abi, signer);
      contract_r = new ethers.Contract(ADDRESS, abi, provider);
      // logging the conected metamask adress to the site
      console.log("Account:", await signer.getAddress());
      console.log(contract_rw);
      console.log(contract_r);
      
      const supply = await contract_r.totalSupply();
      console.log(supply, "supply in BN", ethers.utils.formatEther( supply ), "converting BN to string" )
      */
      //const txOpenPrivate = await openPrivateSale();
      //const txResult = await txOpenPrivate.wait();
      //console.log("transaction mined", txResult);
    }
    console.log('going to connect');
    connect();
  });

  return (
    <MainTemplate page="Tickets">
      <Screen>
        <img src="/static/images/tickets/ticketsInterface.png" alt="Screen" />
        <Scanlines src="/static/images/tickets/ticketsScanlines.png" alt="Screen" />
      </Screen>
      <Arm src="/static/images/tickets/ticketsAssemblerArm.png" alt="Screen" />
      <LoadCharacter>
        <LoadAnimation />
        <LoadMask src="/static/images/tickets/ticketsProgressOverlay.png" alt="Screen" />
      </LoadCharacter>
    </MainTemplate>
  );
}

export default TicketsTemplate;
