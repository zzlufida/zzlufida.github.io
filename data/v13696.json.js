window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13696","name":"v_mps_atpdetail","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_mps_atpdetail\r\nas\r\nselect Guid,\r\n       Date,--供需日期\r\n       DocCode,--订单号码\r\n       DocSeq,--行号\r\n       DemType = case when DemType in(1,4,11,12) then 'MO' --订单型态 'MO':生产订单\r\n                      when DemType in(2,5) and ExternalFlag = 0 then 'PU' --'PU':采购订单\r\n                      when DemType in(2,5) and ExternalFlag = 1 then 'FP'--'FP':进口订单\r\n                      when DemType in(3,6,13,14) then 'SU'--'SU':委外订单\r\n                      when DemType in(7,8) then 'RQ'--'RQ':请购订单\r\n                      when DemType in(9,20) then 'MP'--'MP':计划订单\r\n                      when DemType in(17,18) then 'EX'--'EX':出口订单\r\n                      when DemType in(21) then 'OH'--'OH':安全库存\r\n                      when DemType in(10,22) then 'OD' end,--'OD':逾期\r\n       Status = Case when DemType in(1,2,3,7,11,13,15,17) then 2 --锁定\r\n                     when DemType in(4,5,6,8,12,14,16,18) then 3 end,--审核 \r\n       IsSupply = Case when DemType >10 then 0 --需求\r\n                       when DemType <=10 then 1 end, --供应\r\n       Qty,--订单原量\r\n       BalQty --订单余量\r\n  from mps_atpdetail  \r\n where DemType <> 0","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_mps_atpdetail"},{"field":"Type","value":"View"}],"columns":[{"id":"column-395805","object_id":"column-395805","name":"Guid","name_without_path":"Guid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395806","object_id":"column-395806","name":"Date","name_without_path":"Date","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395807","object_id":"column-395807","name":"DocCode","name_without_path":"DocCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395808","object_id":"column-395808","name":"DocSeq","name_without_path":"DocSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395809","object_id":"column-395809","name":"DemType","name_without_path":"DemType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395810","object_id":"column-395810","name":"Status","name_without_path":"Status","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395811","object_id":"column-395811","name":"IsSupply","name_without_path":"IsSupply","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395812","object_id":"column-395812","name":"Qty","name_without_path":"Qty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395813","object_id":"column-395813","name":"BalQty","name_without_path":"BalQty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};