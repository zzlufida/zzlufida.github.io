window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13861","name":"v_sfc_moroutingdetail_saleorder","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_sfc_moroutingdetail_saleorder\r\nas\r\nselect isosid = o.Orderdid,\r\n       vt_id = v1.vt_id,\r\n       cvouchtype =v1.vt_cardnumber,\r\n       cvouchname = e.enumname,--单据类型\r\n       moid = h1.moid,\r\n       modid = o.modid,\r\n       mocode = h1.mocode, --生产订单号\r\n       d.opseq,--工序行号\r\n       d.description,-- 工序说明\r\n       d.startdate,--开工日期\r\n       d.duedate,-- 完工日期\r\n       s.wccode,--工作中心编码\r\n       wcname=s.description,--工作中心名称   \r\n       vencode =d.svendorcode,--委外商代号\r\n       vendesc = v.cVenName,--委外商名称\r\n       qty = h.qty,--生产/委外数量\r\n       inqty =d.CompleteQty, -- 完工数量\r\n       d.qualifiedqty,--合格量\r\n       d.refusedqty,--拒绝数量\r\n       d.scrapqty,--报废数量\r\n\tid=h.moroutingid\r\nfrom sfc_morouting h\r\ninner join mom_orderdetail o on h.MoDId = o.MoDId\r\ninner join mom_order h1 on h1.moid = o.moid \r\ninner join sfc_moroutingdetail d on h.MoRoutingId = d.MoRoutingId\r\nleft outer join sfc_workcenter s on s.WcId = d.WcId\r\nleft outer join Vendor as v on v.cVenCode = d.SVendorCode\r\nleft outer join aa_enum e on localeid = dbo.UDF_GetLocaleID() and enumtype = 'QM.CSOURCE' and EnumIndex = 22\r\nleft outer join VoucherTemplates v1 on v1.VT_ID = h.VTID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_sfc_moroutingdetail_saleorder"},{"field":"Type","value":"View"}],"columns":[{"id":"column-403774","object_id":"column-403774","name":"isosid","name_without_path":"isosid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403775","object_id":"column-403775","name":"vt_id","name_without_path":"vt_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403776","object_id":"column-403776","name":"cvouchtype","name_without_path":"cvouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403777","object_id":"column-403777","name":"cvouchname","name_without_path":"cvouchname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403778","object_id":"column-403778","name":"moid","name_without_path":"moid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403779","object_id":"column-403779","name":"modid","name_without_path":"modid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403780","object_id":"column-403780","name":"mocode","name_without_path":"mocode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403781","object_id":"column-403781","name":"opseq","name_without_path":"opseq","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403782","object_id":"column-403782","name":"description","name_without_path":"description","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403783","object_id":"column-403783","name":"startdate","name_without_path":"startdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403784","object_id":"column-403784","name":"duedate","name_without_path":"duedate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403785","object_id":"column-403785","name":"wccode","name_without_path":"wccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403786","object_id":"column-403786","name":"wcname","name_without_path":"wcname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403787","object_id":"column-403787","name":"vencode","name_without_path":"vencode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403788","object_id":"column-403788","name":"vendesc","name_without_path":"vendesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403789","object_id":"column-403789","name":"qty","name_without_path":"qty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403790","object_id":"column-403790","name":"inqty","name_without_path":"inqty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403791","object_id":"column-403791","name":"qualifiedqty","name_without_path":"qualifiedqty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403792","object_id":"column-403792","name":"refusedqty","name_without_path":"refusedqty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403793","object_id":"column-403793","name":"scrapqty","name_without_path":"scrapqty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403794","object_id":"column-403794","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};