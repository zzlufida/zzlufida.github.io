window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14289","name":"vwFM_StockFxRetSum","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwFM_StockFxRetSum\r\nAS\r\nSELECT strUnitCode,strExchName, CASE WHEN ISNULL(strChecker, N'')= N'' THEN N'否' ELSE N'是' END as N'是否审核', isnull(SUM(dblReMon),0) AS N'还筹资额', isnull(SUM(dblReGle),0) \r\n      AS N'还股利额'\r\nFROM dbo.FM_StockReturn\r\nGROUP BY strUnitCode,strExchName, CASE WHEN ISNULL(strChecker, N'')= N'' THEN N'否' ELSE N'是' END","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwFM_StockFxRetSum"},{"field":"Type","value":"View"}],"columns":[{"id":"column-423251","object_id":"column-423251","name":"strUnitCode","name_without_path":"strUnitCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423252","object_id":"column-423252","name":"strExchName","name_without_path":"strExchName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423253","object_id":"column-423253","name":"是否审核","name_without_path":"是否审核","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423254","object_id":"column-423254","name":"还筹资额","name_without_path":"还筹资额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423255","object_id":"column-423255","name":"还股利额","name_without_path":"还股利额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};