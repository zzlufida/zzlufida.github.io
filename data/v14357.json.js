window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14357","name":"vwVListSub","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--37、vwVListSub\r\nCREATE VIEW vwVListSub\r\nAS\r\nSELECT intNoID, SUM(dblAmount) AS JE, intID\r\nFROM UA_SubVoucher\r\nGROUP BY intNoID, intID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwVListSub"},{"field":"Type","value":"View"}],"columns":[{"id":"column-424747","object_id":"column-424747","name":"intNoID","name_without_path":"intNoID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424748","object_id":"column-424748","name":"JE","name_without_path":"JE","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424749","object_id":"column-424749","name":"intID","name_without_path":"intID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};