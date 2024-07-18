window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14263","name":"vwFM_FinCBOtherSum","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwFM_FinCBOtherSum\r\nAS\r\nSELECT strfinid,SUM(isnull(dblHand,0)) AS N'手续费',sum(isnull(dblTax,0)) as N'税金',sum(isnull(dblOther,0)) as N'其他费用', CASE WHEN ISNULL(strChecker, N'')= N'' THEN N'否' ELSE N'是' END as N'是否审核'\r\n FROM dbo.FM_FinReturn  GROUP BY strfinid,CASE WHEN ISNULL(strChecker, N'')= N'' THEN N'否' ELSE N'是' END","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwFM_FinCBOtherSum"},{"field":"Type","value":"View"}],"columns":[{"id":"column-423104","object_id":"column-423104","name":"strfinid","name_without_path":"strfinid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423105","object_id":"column-423105","name":"手续费","name_without_path":"手续费","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423106","object_id":"column-423106","name":"税金","name_without_path":"税金","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423107","object_id":"column-423107","name":"其他费用","name_without_path":"其他费用","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423108","object_id":"column-423108","name":"是否审核","name_without_path":"是否审核","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};