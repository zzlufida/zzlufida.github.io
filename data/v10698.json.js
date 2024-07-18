window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10698","name":"ex_v_sales_demo","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view dbo.ex_v_sales_demo\r\nas\r\nselect subid,mainid,iordersubid,cinvcode,cinvname,cinvm_unit,fqty,cunitname,fchangerate,fqtys,cbupload,crequirement,fpackqty,finvweight,finvgrossw,\r\n\tfweight,fgrossw,cvunit,finvvolume,fvolume,fprice,funitprice,fmoney,fdiscountrate,fdiscountrate1,fdiscount,dprebdate,cwarename\r\nfrom dbo.ex_sales_demo","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"ex_v_sales_demo"},{"field":"Type","value":"View"}],"columns":[{"id":"column-202305","object_id":"column-202305","name":"subid","name_without_path":"subid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202306","object_id":"column-202306","name":"mainid","name_without_path":"mainid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202307","object_id":"column-202307","name":"iordersubid","name_without_path":"iordersubid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202308","object_id":"column-202308","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202309","object_id":"column-202309","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202310","object_id":"column-202310","name":"cinvm_unit","name_without_path":"cinvm_unit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202311","object_id":"column-202311","name":"fqty","name_without_path":"fqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202312","object_id":"column-202312","name":"cunitname","name_without_path":"cunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202313","object_id":"column-202313","name":"fchangerate","name_without_path":"fchangerate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202314","object_id":"column-202314","name":"fqtys","name_without_path":"fqtys","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202315","object_id":"column-202315","name":"cbupload","name_without_path":"cbupload","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202316","object_id":"column-202316","name":"crequirement","name_without_path":"crequirement","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202317","object_id":"column-202317","name":"fpackqty","name_without_path":"fpackqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202318","object_id":"column-202318","name":"finvweight","name_without_path":"finvweight","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202319","object_id":"column-202319","name":"finvgrossw","name_without_path":"finvgrossw","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202320","object_id":"column-202320","name":"fweight","name_without_path":"fweight","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202321","object_id":"column-202321","name":"fgrossw","name_without_path":"fgrossw","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202322","object_id":"column-202322","name":"cvunit","name_without_path":"cvunit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202323","object_id":"column-202323","name":"finvvolume","name_without_path":"finvvolume","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202324","object_id":"column-202324","name":"fvolume","name_without_path":"fvolume","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202325","object_id":"column-202325","name":"fprice","name_without_path":"fprice","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202326","object_id":"column-202326","name":"funitprice","name_without_path":"funitprice","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202327","object_id":"column-202327","name":"fmoney","name_without_path":"fmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202328","object_id":"column-202328","name":"fdiscountrate","name_without_path":"fdiscountrate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202329","object_id":"column-202329","name":"fdiscountrate1","name_without_path":"fdiscountrate1","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202330","object_id":"column-202330","name":"fdiscount","name_without_path":"fdiscount","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202331","object_id":"column-202331","name":"dprebdate","name_without_path":"dprebdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202332","object_id":"column-202332","name":"cwarename","name_without_path":"cwarename","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};