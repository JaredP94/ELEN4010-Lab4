$('document').ready(function(){
	$.getJSON("/todo/api/list", function (data) {
		var todoList = $("#todoList");
		data.forEach(function(todoItem){
			var li = $('<li/>')
			.addClass('todo-item')
			.text(todoItem)
			.appendTo(todoList);
		});
	});

	$("#addTodoButton").click(function(){
		var item = $('#newTodoInput').val();
		$.post("/todo/api/create",
			{
				todo: item
			},
			function(data, status){
	        	alert("Submitted data: " + item);
	    });
	    location.reload(); //reload page to get updated list
	});
});