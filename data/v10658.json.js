window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10658","name":"ex_innerlist","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view ex_innerlist as   \r\nselect [voucherid],[id],[orderguid],[objectid],[guid],[isubject],[coperation],[foverflow],[fqty],[fmoney],[fnatmoney],[fnum],[objectid_source],[guid_source],[consignmentguid],[stockupguid],[invoiceguid],[unconsignmentguid],[uninvoiceguid],[bflag],[iunittype],[identyid] from ex_innerlist_order\r\nunion all\r\nselect [voucherid],[id],[orderguid],[objectid],[guid],[isubject],[coperation],[foverflow],[fqty],[fmoney],[fnatmoney],[fnum],[objectid_source],[guid_source],[consignmentguid],[stockupguid],[invoiceguid],[unconsignmentguid],[uninvoiceguid],[bflag],[iunittype],[identyid] from ex_innerlist_consignment\r\nunion all\r\nselect [voucherid],[id],[orderguid],[objectid],[guid],[isubject],[coperation],[foverflow],[fqty],[fmoney],[fnatmoney],[fnum],[objectid_source],[guid_source],[consignmentguid],[stockupguid],[invoiceguid],[unconsignmentguid],[uninvoiceguid],[bflag],[iunittype],[identyid] from ex_innerlist_invoice\r\nunion all\r\nselect [voucherid],[id],[orderguid],[objectid],[guid],[isubject],[coperation],[foverflow],[fqty],[fmoney],[fnatmoney],[fnum],[objectid_source],[guid_source],[consignmentguid],[stockupguid],[invoiceguid],[unconsignmentguid],[uninvoiceguid],[bflag],[iunittype],[identyid] from ex_innerlist_stockup\r\nunion all\r\nselect [voucherid],[id],[orderguid],[objectid],[guid],[isubject],[coperation],[foverflow],[fqty],[fmoney],[fnatmoney],[fnum],[objectid_source],[guid_source],[consignmentguid],[stockupguid],[invoiceguid],[unconsignmentguid],[uninvoiceguid],[bflag],[iunittype],[identyid] from ex_innerlist_credit\r\nunion all\r\nselect [voucherid],[id],[orderguid],[objectid],[guid],[isubject],[coperation],[foverflow],[fqty],[fmoney],[fnatmoney],[fnum],[objectid_source],[guid_source],[consignmentguid],[stockupguid],[invoiceguid],[unconsignmentguid],[uninvoiceguid],[bflag],[iunittype],[identyid] from ex_innerlist_fare\r\nunion all\r\nselect [voucherid],[id],[orderguid],[objectid],[guid],[isubject],[coperation],[foverflow],[fqty],[fmoney],[fnatmoney],[fnum],[objectid_source],[guid_source],[consignmentguid],[stockupguid],[invoiceguid],[unconsignmentguid],[uninvoiceguid],[bflag],[iunittype],[identyid] from ex_innerlist_out\r\nunion all\r\nselect [voucherid],[id],[orderguid],[objectid],[guid],[isubject],[coperation],[foverflow],[fqty],[fmoney],[fnatmoney],[fnum],[objectid_source],[guid_source],[consignmentguid],[stockupguid],[invoiceguid],[unconsignmentguid],[uninvoiceguid],[bflag],[iunittype],[identyid] from ex_innerlist_puorder","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"ex_innerlist"},{"field":"Type","value":"View"}],"columns":[{"id":"column-199905","object_id":"column-199905","name":"voucherid","name_without_path":"voucherid","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 0","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199906","object_id":"column-199906","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199907","object_id":"column-199907","name":"orderguid","name_without_path":"orderguid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199908","object_id":"column-199908","name":"objectid","name_without_path":"objectid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199909","object_id":"column-199909","name":"guid","name_without_path":"guid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199910","object_id":"column-199910","name":"isubject","name_without_path":"isubject","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199911","object_id":"column-199911","name":"coperation","name_without_path":"coperation","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199912","object_id":"column-199912","name":"foverflow","name_without_path":"foverflow","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199913","object_id":"column-199913","name":"fqty","name_without_path":"fqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199914","object_id":"column-199914","name":"fmoney","name_without_path":"fmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199915","object_id":"column-199915","name":"fnatmoney","name_without_path":"fnatmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199916","object_id":"column-199916","name":"fnum","name_without_path":"fnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199917","object_id":"column-199917","name":"objectid_source","name_without_path":"objectid_source","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199918","object_id":"column-199918","name":"guid_source","name_without_path":"guid_source","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199919","object_id":"column-199919","name":"consignmentguid","name_without_path":"consignmentguid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199920","object_id":"column-199920","name":"stockupguid","name_without_path":"stockupguid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199921","object_id":"column-199921","name":"invoiceguid","name_without_path":"invoiceguid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199922","object_id":"column-199922","name":"unconsignmentguid","name_without_path":"unconsignmentguid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199923","object_id":"column-199923","name":"uninvoiceguid","name_without_path":"uninvoiceguid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199924","object_id":"column-199924","name":"bflag","name_without_path":"bflag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199925","object_id":"column-199925","name":"iunittype","name_without_path":"iunittype","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199926","object_id":"column-199926","name":"identyid","name_without_path":"identyid","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 0","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};