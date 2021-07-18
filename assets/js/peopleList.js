var options = {
    valueNames: ['surname', 'forenames', 'age', 'date', 'graveID'],
};

var peopleList = new List('peopleList', options)
    .on('updated', function(list) {
        if (list.matchingItems.length == 0) {
          list.list.innerHTML = '<tr style="text-align:center"><td colspan="3">No items found</td></tr>';
        }
    });
