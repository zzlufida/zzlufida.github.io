window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10361","name":"CN_AccountInfo_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View CN_AccountInfo_View   \r\nAS  \r\n    select \r\n       CN_AcctInfoView.ID AS ID,\r\n       CN_AcctInfoView.csAcctNum as AccountCode,\r\n       CN_AcctInfoView.AcctName AS AccountName,\r\n       CN_AcctInfoView.BankAcct as BankCode,\r\n       CN_AcctInfoView.BankName as BankName,\r\n       CN_AcctInfoView.AcctType as AccountType,\r\n       CN_AcctInfoView.lYear AS iYear,\r\n       CN_AcctInfoView.CurTypeName AS CurTypeName,\r\n       CN_AcctInfoView.cBCode AS cBCode\r\n    from CN_AcctInfoView with (nolock)\r\n    Where (CN_AcctInfoView.AcctType=0 or CN_AcctInfoView.AcctType=1) \r\n    and CN_AcctInfoView.IsUsed=1 and CN_AcctInfoView.IsFreeze=0 and CN_AcctInfoView.lHaveChild=0","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CN_AccountInfo_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-184646","object_id":"column-184646","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-184647","object_id":"column-184647","name":"AccountCode","name_without_path":"AccountCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-184648","object_id":"column-184648","name":"AccountName","name_without_path":"AccountName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-184649","object_id":"column-184649","name":"BankCode","name_without_path":"BankCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-184650","object_id":"column-184650","name":"BankName","name_without_path":"BankName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-184651","object_id":"column-184651","name":"AccountType","name_without_path":"AccountType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-184652","object_id":"column-184652","name":"iYear","name_without_path":"iYear","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-184653","object_id":"column-184653","name":"CurTypeName","name_without_path":"CurTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-184654","object_id":"column-184654","name":"cBCode","name_without_path":"cBCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};