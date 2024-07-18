window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14192","name":"vwAuthUnit","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--1、视图vwAuthUnit\r\nCREATE VIEW vwAuthUnit AS\r\nSELECT UA_AuthDef.strPersonID, UA_AuthDef.strPersonName, \r\n    UA_AuthDef.strDuty, UA_AuthDef.strPassword, UA_AuthDefUnit.intID, \r\n    UA_AuthDefUnit.strUnitID, UA_UnitDef.strUnitName,UA_AuthDef.dblValue\r\nFROM UA_AuthDef INNER JOIN\r\n    UA_AuthDefUnit ON \r\n    UA_AuthDef.strPersonID = UA_AuthDefUnit.strPersonID INNER JOIN\r\n    UA_UnitDef ON UA_AuthDefUnit.strUnitID = UA_UnitDef.strUnitID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwAuthUnit"},{"field":"Type","value":"View"}],"columns":[{"id":"column-420732","object_id":"column-420732","name":"strPersonID","name_without_path":"strPersonID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-420733","object_id":"column-420733","name":"strPersonName","name_without_path":"strPersonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-420734","object_id":"column-420734","name":"strDuty","name_without_path":"strDuty","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-420735","object_id":"column-420735","name":"strPassword","name_without_path":"strPassword","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-420736","object_id":"column-420736","name":"intID","name_without_path":"intID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-420737","object_id":"column-420737","name":"strUnitID","name_without_path":"strUnitID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-420738","object_id":"column-420738","name":"strUnitName","name_without_path":"strUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-420739","object_id":"column-420739","name":"dblValue","name_without_path":"dblValue","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};