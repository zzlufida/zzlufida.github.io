window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14330","name":"vwNEOPKM","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [vwNEOPKM]\r\nAS\r\nSELECT dbo.NE_PzSet_OP.GUID, dbo.NE_PzSet_OP.strOperatType, \r\n      dbo.NE_PzSet_OP.strBalanceType, dbo.SettleStyle.cSSName AS strBalanceName, \r\n      dbo.NE_PzSet_OP.strBankID, dbo.Bank.cBName, dbo.Bank.cBAccount, \r\n      dbo.NE_PzSet_OP.strCurrency, dbo.NE_PzSet_OP.strSubject AS strCode, \r\n      Cast(dbo.NE_PzSet_OP.ts As money) As ts\r\nFROM dbo.NE_PzSet_OP LEFT OUTER JOIN\r\n      dbo.SettleStyle ON \r\n      dbo.NE_PzSet_OP.strBalanceType = dbo.SettleStyle.cSSCode LEFT OUTER JOIN\r\n      dbo.Bank ON dbo.NE_PzSet_OP.strBankID = dbo.Bank.cBCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwNEOPKM"},{"field":"Type","value":"View"}],"columns":[{"id":"column-424438","object_id":"column-424438","name":"GUID","name_without_path":"GUID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424439","object_id":"column-424439","name":"strOperatType","name_without_path":"strOperatType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424440","object_id":"column-424440","name":"strBalanceType","name_without_path":"strBalanceType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424441","object_id":"column-424441","name":"strBalanceName","name_without_path":"strBalanceName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424442","object_id":"column-424442","name":"strBankID","name_without_path":"strBankID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424443","object_id":"column-424443","name":"cBName","name_without_path":"cBName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424444","object_id":"column-424444","name":"cBAccount","name_without_path":"cBAccount","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424445","object_id":"column-424445","name":"strCurrency","name_without_path":"strCurrency","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424446","object_id":"column-424446","name":"strCode","name_without_path":"strCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424447","object_id":"column-424447","name":"ts","name_without_path":"ts","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};