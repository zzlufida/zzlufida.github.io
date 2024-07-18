window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14249","name":"vwFM_CrFxRetSum","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwFM_CrFxRetSum\r\nAS\r\nSELECT strCrBillID, CASE WHEN ISNULL(strChecker, N'')= N'' THEN N'否' ELSE N'是' END as N'是否审核', SUM(isnull(dblReMon,0)) AS N'还本金额', SUM(isnull(dblReAcc,0)) \r\n      AS N'还息金额'\r\nFROM dbo.FM_ReturnCr\r\nGROUP BY strCrBillID, CASE WHEN ISNULL(strChecker, N'')= N'' THEN N'否' ELSE N'是' END","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwFM_CrFxRetSum"},{"field":"Type","value":"View"}],"columns":[{"id":"column-422993","object_id":"column-422993","name":"strCrBillID","name_without_path":"strCrBillID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422996","object_id":"column-422996","name":"是否审核","name_without_path":"是否审核","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422994","object_id":"column-422994","name":"还本金额","name_without_path":"还本金额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422995","object_id":"column-422995","name":"还息金额","name_without_path":"还息金额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};