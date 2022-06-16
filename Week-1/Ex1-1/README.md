# Exercise 1.1

1. When a user enters an URL in the browser, how does the browser fetch the desired result ? Explain this with the below in mind and Demonstrate this by drawing a diagram for the same.

   - What is the main functionality of the browser?
   - High level components of a browser.
   - Rendering engine and its uses.
   - Parsers(HTML, CSS , etc)
   - Script processors
   - Tree construction
   - Order of script processing
   - Layout and painting

## Answer

After entering the URL in the browser the following steps take place in order to show the desired webpage :

1. DNS lookup for finding IP address

   - Checking **browser cache** for DNS records.

   - If DNS query does not get resolved, then the browser checks the **OS cache** followed by **Router cache**.

   - If after perfoming all the above steps, the DNS query is not resolved, then the browser sends it to the resolver server i.e. ISP. This query is now run on the **ISP cache**

   - If the DNS query is still not resolved, then the **ISP's DNS server** initiates a DNS query. This query searches multiple DNS servers on the internet untill it finds out the correct IP address. This type of search is called recursive search. If we are searching for the IP address of a top level domain(.com, ,net, .gov, .org), then the query is sent to the **TLD server**(Top Level Domain) which gives the IP address information to the ISP. Finally, the ISP gives the IP address to the browser.

   ![Top Level Domain server](https://miro.medium.com/max/861/0*udK6jZ3PjlhjqW8U.png)

2. TCP connection initiation with the server by the browser

   - Once the IP address of the required webpage is found, the browser initiates connection with it. In order to do that, an Internet Protocol is used known as TCP/IP(Transmisson Control Protocol/Internet Protocol). A process called *TCP 3-way handshake* is used, which is detailed below:
      - A SYN message is sent by the client computer to check if the server is open for connection or not.
      - If the server is open for connection, the server sends an ACK message along with the SYN message back to the client.
      - On receiving this message, the client computer acknowledges by sending ACK message to the server. After this finally a connection between the client and the server is established.

3. Request Response Process - Communication starts

   Now that the connection between client and server is established, the client(browser) sends a request to the server for a particular content. The server then responds back with the a appropriate response. The response contains every information requested like web page, status-code, cache-control, etc. 

   Finally, the browser renders the content that had been requested.

### Drawing

![Flow chart showing the process of showing a web page](/Week-1/Ex1-1/Ex1%20drawing.jpg)

The above flow-chart shows the process in which a browser fetches the desired result. The steps for which are explained below:

1. The browser checks the Browser cache, OS cache and the Router cache for the IP address of the domain name requested
2. When the IP address is not found, the browser sends the query to the Resolver i.e. the ISP which checks the IP address in the ISP cache and if found, returns the same to the browser.
3. If not resolved, the query is sent to the TLD server by the Resolver.
4. The TLD server provides the IP address of the required server to the Resolver.
5. Now that the Resolver has the IP address, it saves the same in its cache and sends it to the browser.
6. The browser establishes connection with the server having the website using SYN and ACK messages and requests it for the content.
7. The server responds with the requested content and the browser renders it.


   


   