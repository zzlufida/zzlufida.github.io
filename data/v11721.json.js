window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11721","name":"NE_MidCurExpenseToReturn_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View NE_MidCurExpenseToReturn_View \r\nas\r\n\r\nSELECT \r\nExpenseLoanInfo.ID as ExpenseLoanInfoID,\r\nSubBalance.ExpenseVouchID,\r\nMainBalance.Currency,\r\nMainBalance.ExchangeRate,\r\nSubBalance.BalanceMoney as VouchBalanceMoney,\r\nSubBalance.MidCurrencyMoney\r\nFROM NE_BalanceInfo as MainBalance  \r\ninner join NE_ExpenseBalanceInfo as SubBalance on MainBalance.ID=SubBalance.MainBalanceID\r\nleft join NE_ExpenseLoanInfo as ExpenseLoanInfo on SubBalance.ExpenseVouchID = ExpenseLoanInfo.ExpenseVouchID\r\nwhere SubBalance.IsMidCurrency=1 and MainBalance.IsVerify=1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NE_MidCurExpenseToReturn_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-250387","object_id":"column-250387","name":"ExpenseLoanInfoID","name_without_path":"ExpenseLoanInfoID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250388","object_id":"column-250388","name":"ExpenseVouchID","name_without_path":"ExpenseVouchID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250389","object_id":"column-250389","name":"Currency","name_without_path":"Currency","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250390","object_id":"column-250390","name":"ExchangeRate","name_without_path":"ExchangeRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250391","object_id":"column-250391","name":"VouchBalanceMoney","name_without_path":"VouchBalanceMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250392","object_id":"column-250392","name":"MidCurrencyMoney","name_without_path":"MidCurrencyMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};