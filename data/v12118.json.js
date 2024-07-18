window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12118","name":"rel_ws_servicequotationitem","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW rel_ws_servicequotationitem       \r\nAS       \r\nselect distinct(case when ws.ws_id<>NULL then ws.ws_id else stl.ws_id end) as ws_id,a.ws_id as zz,stl.service_quotation_id as ssl_id     \r\nfrom tc_service_quotation_d stl    \r\nleft join tc_worksheet ws  on stl.ws_id =ws.ws_id    \r\nright join tc_service_quotation a on stl.service_quotation_id =a.service_quotation_id    \r\nwhere isnull(stl.service_quotation_id,0) <>'0'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"rel_ws_servicequotationitem"},{"field":"Type","value":"View"}],"columns":[{"id":"column-280360","object_id":"column-280360","name":"ws_id","name_without_path":"ws_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280361","object_id":"column-280361","name":"zz","name_without_path":"zz","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280362","object_id":"column-280362","name":"ssl_id","name_without_path":"ssl_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};