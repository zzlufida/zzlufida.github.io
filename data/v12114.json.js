window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12114","name":"rel_contract_ws","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW rel_contract_ws         \r\nAS  \r\nselect  ws_id,id  from\r\n(\r\nselect distinct wsd.ws_id as ws_id,ct.id as id\r\nfrom SaleOrderQ ct\r\nleft join tc_asset at on ct.id = at.contract_id\r\nleft join tc_worksheet_d  wsd on wsd.asset_id = at.asset_id\r\nwhere isnull(at.contract_id,0) <>'0'  and wsd.ws_id is not null\r\n)  ws1 union select ws_id,id  from   \r\n(\r\nselect distinct ws.ws_id as ws_id ,ct.id as id\r\nfrom SaleOrderQ ct\r\nleft join tc_service sr on ct.id = sr.related_to\r\nleft join tc_worksheet  ws on ws.from_obj_id = sr.service_id\r\nwhere sr.rel_obj_type=6 and isnull(sr.related_to ,0) <>'0' and ws.from_obj_type=52\r\n) ws2","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"rel_contract_ws"},{"field":"Type","value":"View"}],"columns":[{"id":"column-280347","object_id":"column-280347","name":"ws_id","name_without_path":"ws_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280348","object_id":"column-280348","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};