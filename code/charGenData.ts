module charGenData{
  //Yes this approach is awful but i wanted to throw something together.
  //&pp possesive pronoun
  //&np normal pronoun
  //&mp
  //&ncpp possessive pronoun mid sentence
  //&ins where the content goes.
  export var maleFirstNames = "Michael, Digby, Christopher, Matthew, Joshua, Jacob, Nicholas, Andrew, Daniel, Tyler, Joseph, Brandon, David, James, Ryan, John, Zachary, Justin, William, Anthony, Robert, Jonathan, Austin, Alexander, Kyle, Kevin, Thomas, Cody, Jordan, Eric, Benjamin, Aaron, Christian, Samuel, Dylan, Steven, Brian, Jose, Timothy, Nathan, Adam, Richard, Patrick, Charles, Sean, Jason, Cameron, Jeremy, Mark, Stephen, Jesse".split(', ');
  export var femaleFirstNames ="Jessica, Ashley, Emily, Sarah, Samantha, Amanda, Brittany, Elizabeth, Taylor, Megan, Hannah, Kayla, Lauren, Stephanie, Rachel, Jennifer, Nicole, Alexis, Victoria, Amber, Alyssa, Courtney, Danielle, Rebecca, Jasmine, Brianna, Katherine, Alexandra, Madison, Morgan, Melissa, Michelle, Kelsey, Chelsea, Anna, Kimberly, Tiffany, Olivia, Mary, Christina, Allison, Abigail, Sara, Shelby, Heather, Haley, Maria, Kaitlyn, Laura, Erin".split(', ');
  export var lastNames = "Hamilton, Smith, Jones, Taylor, Williams, Brown, Beale, Davies, Evans, Wilson, Thomas, Roberts, Johnson, Lewis, Walker, Robinson, Wood, Thompson, White, Watson, Jackson, Wright, Green, Harris, Cooper, King, Lee, Martin, Clarke, James, Morgan, Hughes, Edwards, Hill, Moore, Clark, Harrison, Scott, Young, Morris, Hall, Ward, Turner, Carter, Phillips, Mitchell, Patel, Adams, Campbell, Anderson, Allen, Cook, Bailey, Parker, Miller, Davis, Murphy, Price, Bell, Baker, Griffiths, Kelly, Simpson, Marshall, Collins, Bennett, Cox, Richardson, Fox, Gray, Rose, Chapman, Hunt, Robertson".split(', ');

  export var fearPhrases = ["&pp greatest fear is of &ins.", "&np is terrified of &ins.", "&np is deathly afraid of &ins.", "&np feels uneasy at the thought of &ins.", "&np can only just tolerate the idea of &ins.", "The thought of &ins makes &mp anxious."];
  export var fears = "a beer freely offered, other people, people of different race, seeing faces that aren't there, things not being in the right order, the ocean deep, sharks, breaking a bone, not having control, letting people down, being disliked, being ignored, being in a fight, being irrelevant, being wrong, not being the best, mirrors, elevators, babies, intimacy, being lost, betrayal, fire, God, you, clowns, drowning, spiders, heights, snakes, crowded spaces, open spaces, small spaces, dogs, thunder, balloons, fireworks, germs, flying, &ncpp teeth falling out, being alone, having no friends, failure, people finding out about &ncpp sexuality, people finding out about &ncpp fetish, talking on the phone, being fired, rejection, change,  the inevitable heat death of the universe, excercise".split(', ');

  export var secretPhrases = [""];
  export var secrets = [""];

  export var desirePhrases = [""];
  export var desires = [""];

  export var generalThoughts = "Why are you doing this?, Yes., No., I need you God., Leave me alone., I can do this., I can't do this., Fuck you., Where am I?, What is this place?, ..., I don't remember..., I don't like it here., I'm scared, What is that looking at me?, Are those horns?, Am I dead?, I need to speak to a lawyer., I'm dreaming., Am I dreaming?, This isn't real., I'm not going to feel ok for a very long time., When will the drugs wear off?, It's a little too cold. Or is it too warm?, I'm starving., So... Tired..., I thought there would be more fire and brimstone., That was a mistake., I can't take it anymore., Please let it end., I don't want to feel anymore., Please don't hurt me., ...do you worst., There's nothing more you can do to me., Is this real?".split(', ');
}
