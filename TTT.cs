/******************************************************************************

                            Online C# Compiler.
                Code, Compile, Run and Debug C# program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/

using System;

//ПЕрший клас Transaction містить :ід хаш псевдо хаш дата юзера 
////////мій основний клас 
public class Transaction{
    public int ID {get; private set;}
    public string Data {get;private set;}
    public DateTime Created {get;private set;}
    public string Hash {get;private set;}
    public string PreviousHash {get;private set;}
    public string User {get;set;}
    public Block(){
          ID=1;
          Data="Hollaa ";
          Created= DataTime.Parse("23.02.2022 00:00:00.000");
          PreviousHash="111111";
          User="Admin";
          

          var data =GetData();
          Hash=GetHash(data );

    }

  ////////перевірка на пустоту 
    public Block(string data,Block block,string user){

      if(string.IsNullOrWhiteSpace(data))
      {
        throw new ArgumentNullException($"Пусто data",nameof(data));
      }
      if(block==null){
        throw new ArgumentNullException($"Пусто block",nameof(block));
      }
      if(user==null){
        throw new ArgumentNullException($"Пусто user",nameof(user));
      }
      Data=data;
      User=user;
      PreviousHash=block.Hash;
      Created=DataTime.UtcNow;
      ID=block.ID + 1 ;


         var blockData =GetData();
          Hash=GetHash(blockData);
    }
    ///// получити дату 
    private string  getData(){

      string result="";
      result+=ID.ToString();
      result+=Data;
      result+=Created.ToString("dd.mm.yyyy.HH:mm:ss.fff");
      result+=PreviousHash;
      result+=User;

      return result;
    }
    /////получення хеша 
    private sring GetHash(string data){
      var message= Encoding.ASCII.GetBytes(data);
      var hashString = new SHA256Managed();
      string hex ="";
      
      var hashValue= hashString.ComputeHash(message);
      foreach(byte x in hashValue){
        hex += String.Format("{0:x2}",x);

      }
      return hex;

    }

}


//////Другий класс
public class Chain {
public List<Block>Blocks{get;private set;}
public Block Last {get; private set;}

public Chain(){


Blocks=new List<Block>();
var genesisBlock= new Block();

Block.Add(genesisBlock);
Last=genesisBlock;
}
public void Add(string date, string user){

  var block =new Block (data,user,Last);
  Blocks.Add(block);

  Last=block;

}


}
class HelloWorld {
  static void Main() {
    Console.WriteLine("Hello World");
  }
}
