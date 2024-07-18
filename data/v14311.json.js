window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14311","name":"vwNEExpenDepart","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwNEExpenDepart\r\nAS\r\nSELECT dbo.NE_Expense.GUID, dbo.Department.cDepCode, \r\n      dbo.Department.cDepName\r\nFROM dbo.NE_Expense LEFT OUTER JOIN\r\n      dbo.NE_ExpenseDepart ON \r\n      dbo.NE_Expense.GUID = dbo.NE_ExpenseDepart.GuidMain LEFT OUTER JOIN\r\n      dbo.Department ON \r\n      dbo.NE_ExpenseDepart.strDepartID = dbo.Department.cDepCode\r\nWHERE (dbo.Department.bDepEnd = 1)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwNEExpenDepart"},{"field":"Type","value":"View"}],"columns":[{"id":"column-423717","object_id":"column-423717","name":"GUID","name_without_path":"GUID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423718","object_id":"column-423718","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423719","object_id":"column-423719","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};