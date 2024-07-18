window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12728","name":"V_CM_ICMBalance","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.V_CM_ICMBalance\r\nAS\r\nSELECT B.cContractID, M.ccode, SUM(ISNULL(M.decNoRateMoney, 0)) \r\n    AS decNoRateMoney, SUM(ISNULL(M.decNoRateMoney, 0) * (1 + ISNULL(M.decRate, 0) /100))\r\n    AS RateMoney, SUM(ISNULL(C.decMoney, 0)) AS decMoney, SUM(ISNULL(C.iQuantity, 0)) \r\n    AS iQuantity, SUM(ISNULL(M.decCount, 0)) AS decCount\r\nFROM dbo.CM_Balances M left JOIN\r\n    dbo.CM_BalanceDetail C ON M.BalancesGuid = C.BalancesGUID INNER JOIN\r\n    dbo.CM_Balance B ON M.cBalanceID = B.cBalanceID\r\nGROUP BY B.cContractID, M.ccode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_CM_ICMBalance"},{"field":"Type","value":"View"}],"columns":[{"id":"column-318167","object_id":"column-318167","name":"cContractID","name_without_path":"cContractID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318168","object_id":"column-318168","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318169","object_id":"column-318169","name":"decNoRateMoney","name_without_path":"decNoRateMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"38, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318170","object_id":"column-318170","name":"RateMoney","name_without_path":"RateMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 7","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318171","object_id":"column-318171","name":"decMoney","name_without_path":"decMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318172","object_id":"column-318172","name":"iQuantity","name_without_path":"iQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318173","object_id":"column-318173","name":"decCount","name_without_path":"decCount","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};