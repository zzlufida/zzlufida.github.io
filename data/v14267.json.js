window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14267","name":"vwFM_FinFxAccSum","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwFM_FinFxAccSum\r\nAS\r\nSELECT strFinID, CASE WHEN ISNULL(strChecker, N'') \r\n      = N'' THEN N'否' ELSE N'是' END AS N'是否审核', SUM(isnull(dblAccMon,0)) AS N'利息金额', \r\n      SUM(isnull(dblReAccMon,0)) AS N'还息金额'\r\nFROM dbo.FM_FinAcc\r\nGROUP BY strFinID, CASE WHEN ISNULL(strChecker, N'') = N'' THEN N'否' ELSE N'是' END","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwFM_FinFxAccSum"},{"field":"Type","value":"View"}],"columns":[{"id":"column-423118","object_id":"column-423118","name":"strFinID","name_without_path":"strFinID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423119","object_id":"column-423119","name":"是否审核","name_without_path":"是否审核","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423120","object_id":"column-423120","name":"利息金额","name_without_path":"利息金额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423121","object_id":"column-423121","name":"还息金额","name_without_path":"还息金额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};