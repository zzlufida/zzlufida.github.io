window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13817","name":"v_refer_CustomerBank","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view [dbo].[v_refer_CustomerBank]\r\nas\r\nSELECT cast(0 as bit) as bRefSelectColumn,\r\n\t[CustomerBankEntity_CustomerBank].[cCusCode] as cCusCode,\r\n\t[CustomerBankEntity_CustomerBank].[cBank] as cBank,\r\n\t[CustomerBankEntity_CustomerBank].[cBranch] as cBranch,\r\n\t[CustomerBankEntity_CustomerBank].[cAccountNum] as cAccountNum,\r\n\t[CustomerBankEntity_CustomerBank].[cAccountName] as cAccountName,\r\n\t[CustomerBankEntity_CustomerBank].[bDefault] as bDefault \r\n FROM [CustomerBank] AS [CustomerBankEntity_CustomerBank]","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_refer_CustomerBank"},{"field":"Type","value":"View"}],"columns":[{"id":"column-401516","object_id":"column-401516","name":"bRefSelectColumn","name_without_path":"bRefSelectColumn","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401517","object_id":"column-401517","name":"cCusCode","name_without_path":"cCusCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401518","object_id":"column-401518","name":"cBank","name_without_path":"cBank","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401519","object_id":"column-401519","name":"cBranch","name_without_path":"cBranch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401520","object_id":"column-401520","name":"cAccountNum","name_without_path":"cAccountNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401521","object_id":"column-401521","name":"cAccountName","name_without_path":"cAccountName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401522","object_id":"column-401522","name":"bDefault","name_without_path":"bDefault","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};