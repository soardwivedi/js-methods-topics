// JavaScript program to remove duplicate character
// from character array and print in sorted
// order
function removeDuplicate(string)
    {
        const str = string.split("");
        const strLength = str.length;
        // Used as index in the modified string
        var index = 0;
        // Traverse through all characters
        for (var i = 0; i < strLength; i++)
        {
            // console.log(i);
            // Check if str[i] is present before it
            var j;
            for (j = 0; j < i; j++)
            {
                // console.log(j);
                if (str[i] == str[j])
                {
                    break;
                }
            }
            // If not present, then add it to
            // result.
            if (j == i)
            {
                str[index++] = str[i];
            }
        }
        console.log(str,index);
        return str.join("").slice(str, index);
    }
    // Driver code
        var string = "geeksforgeeks"
        console.log(removeDuplicate(string));
     