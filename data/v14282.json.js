window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14282","name":"vwFM_PartSySum","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwFM_PartSySum\r\nAS\r\nSELECT strUnitCode,strExchName,SUM(isnull(dblMoney,0)) AS N'股利总额',CASE WHEN ISNULL(strChecker, N'')= N'' THEN N'否' ELSE N'是' END AS N'是否审核'\r\n FROM dbo.FM_PartWin  GROUP BY strUnitCode,strExchName,CASE WHEN ISNULL(strChecker, N'')= N'' THEN N'否' ELSE N'是' END","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwFM_PartSySum"},{"field":"Type","value":"View"}],"columns":[{"id":"column-423213","object_id":"column-423213","name":"strUnitCode","name_without_path":"strUnitCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423214","object_id":"column-423214","name":"strExchName","name_without_path":"strExchName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423215","object_id":"column-423215","name":"股利总额","name_without_path":"股利总额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423216","object_id":"column-423216","name":"是否审核","name_without_path":"是否审核","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};