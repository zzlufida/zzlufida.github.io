window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13101","name":"v_ex_relaom_modetailsbyorder","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_ex_relaom_modetailsbyorder   \r\nas         \r\nselect om_modetails.moid as id ,om_modetails.modetailsid as autoid,null as ccovouchtype,ex_orderdetail.guids as guid_source,ex_orderdetail.guids      \r\nfrom ex_orderdetail inner join ex_order on ex_orderdetail.id=ex_order.id  \r\ninner join om_modetails on ex_orderdetail.autoid=om_modetails.isosid     \r\nwhere om_modetails.csource in ('ex')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ex_relaom_modetailsbyorder"},{"field":"Type","value":"View"}],"columns":[{"id":"column-349384","object_id":"column-349384","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-349385","object_id":"column-349385","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-349386","object_id":"column-349386","name":"ccovouchtype","name_without_path":"ccovouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-349387","object_id":"column-349387","name":"guid_source","name_without_path":"guid_source","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-349388","object_id":"column-349388","name":"guids","name_without_path":"guids","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};