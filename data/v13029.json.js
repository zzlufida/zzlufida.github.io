window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13029","name":"v_ex_order_all_forMo","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view [dbo].[v_ex_order_all_forMo]\r\nas\r\n\r\nselect v_ex_orderlist.id, v_ex_orderlist.autoid , v_ex_orderlist.ccode, v_ex_orderlist.ddate, v_ex_orderlist.ccuscode, dbo.v_ex_orderlist.ccusname, dbo.v_ex_orderlist.ccusabbname, \r\nv_ex_orderlist.irowno , v_ex_orderlist.icusbomid , \r\nv_ex_orderlist.dcompletedate ,v_ex_orderlist.clocker , v_ex_orderlist.ccloser,  v_ex_orderlist.cmaker , v_ex_orderlist.cverifier , v_ex_orderlist.dverifierdate , \r\nv_ex_orderlist.cmemo , v_ex_orderlist.cinvcode, v_ex_orderlist.cinvname, v_ex_orderlist.cinvaddcode, v_ex_orderlist.cinvstd, v_ex_orderlist.ccomunitcode, v_ex_orderlist.ccomunitname, \r\n(isnull(v_ex_orderlist.fquantity,0)-isnull(fpuqty,0) - isnull(fmoqty , 0)) as fquantity , \r\n(isnull(v_ex_orderlist.fnum,0)-isnull(fpunum,0) - isnull(fmonum , 0)) as fnum, \r\nv_ex_orderlist.csacomunitcode,v_ex_orderlist.csacomunitname,\r\nv_ex_orderlist.fchangrate,v_ex_orderlist.igrouptype , \r\nv_ex_orderlist.cfree1, v_ex_orderlist.cfree2,v_ex_orderlist.cfree3, v_ex_orderlist.cfree4, v_ex_orderlist.cfree5, v_ex_orderlist.cfree6, v_ex_orderlist.cfree7, v_ex_orderlist.cfree8, v_ex_orderlist.cfree9, v_ex_orderlist.cfree10,   \r\nv_ex_orderlist.cdefine22, v_ex_orderlist.cdefine23, v_ex_orderlist.cdefine24, v_ex_orderlist.cdefine25, v_ex_orderlist.cdefine26, v_ex_orderlist.cdefine27, v_ex_orderlist.cdefine28, v_ex_orderlist.cdefine29, v_ex_orderlist.cdefine30,   \r\nv_ex_orderlist.cdefine31, v_ex_orderlist.cdefine32, v_ex_orderlist.cdefine33, v_ex_orderlist.cdefine34, v_ex_orderlist.cdefine35, v_ex_orderlist.cdefine36, v_ex_orderlist.cdefine37,\r\nv_ex_orderlist.cinvdefine1,v_ex_orderlist.cinvdefine2,v_ex_orderlist.cinvdefine3,v_ex_orderlist.cinvdefine4,v_ex_orderlist.cinvdefine5,v_ex_orderlist.cinvdefine6,v_ex_orderlist.cinvdefine7,\r\nv_ex_orderlist.cinvdefine8,v_ex_orderlist.cinvdefine9,v_ex_orderlist.cinvdefine10,v_ex_orderlist.cinvdefine11,v_ex_orderlist.cinvdefine12,v_ex_orderlist.cinvdefine13,\r\nv_ex_orderlist.cinvdefine14,v_ex_orderlist.cinvdefine15,v_ex_orderlist.cinvdefine16,\r\nv_ex_orderlist.ufts,v_ex_orderlist.fprekeepprtnum,v_ex_orderlist.fprekeepprtqty,v_ex_orderlist.ibustypeid,v_ex_orderlist.cbustype,v_ex_orderlist.cfactorycode ,v_ex_orderlist.cfactoryname \r\nfrom v_ex_orderlist \r\nwhere isnull(v_ex_orderlist.bdraft,0) = 0 and isnull(v_ex_orderlist.ccloser , N'') = N'' and isnull(v_ex_orderlist.clinecloser , N'') = N'' \r\nand isnull(fpuqty , 0) =0 \r\n--and (isnull(v_ex_orderlist.fquantity,0) * (1 + isnull(v_ex_orderlist.foverflowrange,0)) - isnull(fpuqty , 0) -  isnull(fmoqty , 0)) > 0 \r\nand isnull(binvtype,0)=0 and isnull(bservice,0)=0","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ex_order_all_forMo"},{"field":"Type","value":"View"}],"columns":[{"id":"column-341096","object_id":"column-341096","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341097","object_id":"column-341097","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341098","object_id":"column-341098","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"excode: nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341099","object_id":"column-341099","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341100","object_id":"column-341100","name":"ccuscode","name_without_path":"ccuscode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341101","object_id":"column-341101","name":"ccusname","name_without_path":"ccusname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341102","object_id":"column-341102","name":"ccusabbname","name_without_path":"ccusabbname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341103","object_id":"column-341103","name":"irowno","name_without_path":"irowno","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341104","object_id":"column-341104","name":"icusbomid","name_without_path":"icusbomid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341105","object_id":"column-341105","name":"dcompletedate","name_without_path":"dcompletedate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341106","object_id":"column-341106","name":"clocker","name_without_path":"clocker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341107","object_id":"column-341107","name":"ccloser","name_without_path":"ccloser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341108","object_id":"column-341108","name":"cmaker","name_without_path":"cmaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341109","object_id":"column-341109","name":"cverifier","name_without_path":"cverifier","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341110","object_id":"column-341110","name":"dverifierdate","name_without_path":"dverifierdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341111","object_id":"column-341111","name":"cmemo","name_without_path":"cmemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341112","object_id":"column-341112","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341113","object_id":"column-341113","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341114","object_id":"column-341114","name":"cinvaddcode","name_without_path":"cinvaddcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341115","object_id":"column-341115","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341116","object_id":"column-341116","name":"ccomunitcode","name_without_path":"ccomunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341117","object_id":"column-341117","name":"ccomunitname","name_without_path":"ccomunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341118","object_id":"column-341118","name":"fquantity","name_without_path":"fquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341119","object_id":"column-341119","name":"fnum","name_without_path":"fnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341120","object_id":"column-341120","name":"csacomunitcode","name_without_path":"csacomunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341121","object_id":"column-341121","name":"csacomunitname","name_without_path":"csacomunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341122","object_id":"column-341122","name":"fchangrate","name_without_path":"fchangrate","description":null,"is_pk":false,"is_identity":false,"data_type":"exdecimal: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341123","object_id":"column-341123","name":"igrouptype","name_without_path":"igrouptype","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341124","object_id":"column-341124","name":"cfree1","name_without_path":"cfree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341125","object_id":"column-341125","name":"cfree2","name_without_path":"cfree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341126","object_id":"column-341126","name":"cfree3","name_without_path":"cfree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341127","object_id":"column-341127","name":"cfree4","name_without_path":"cfree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341128","object_id":"column-341128","name":"cfree5","name_without_path":"cfree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341129","object_id":"column-341129","name":"cfree6","name_without_path":"cfree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341130","object_id":"column-341130","name":"cfree7","name_without_path":"cfree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341131","object_id":"column-341131","name":"cfree8","name_without_path":"cfree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341132","object_id":"column-341132","name":"cfree9","name_without_path":"cfree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341133","object_id":"column-341133","name":"cfree10","name_without_path":"cfree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341134","object_id":"column-341134","name":"cdefine22","name_without_path":"cdefine22","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341135","object_id":"column-341135","name":"cdefine23","name_without_path":"cdefine23","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341136","object_id":"column-341136","name":"cdefine24","name_without_path":"cdefine24","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341137","object_id":"column-341137","name":"cdefine25","name_without_path":"cdefine25","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341138","object_id":"column-341138","name":"cdefine26","name_without_path":"cdefine26","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341139","object_id":"column-341139","name":"cdefine27","name_without_path":"cdefine27","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341140","object_id":"column-341140","name":"cdefine28","name_without_path":"cdefine28","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341141","object_id":"column-341141","name":"cdefine29","name_without_path":"cdefine29","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341142","object_id":"column-341142","name":"cdefine30","name_without_path":"cdefine30","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341143","object_id":"column-341143","name":"cdefine31","name_without_path":"cdefine31","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341144","object_id":"column-341144","name":"cdefine32","name_without_path":"cdefine32","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341145","object_id":"column-341145","name":"cdefine33","name_without_path":"cdefine33","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341146","object_id":"column-341146","name":"cdefine34","name_without_path":"cdefine34","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341147","object_id":"column-341147","name":"cdefine35","name_without_path":"cdefine35","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341148","object_id":"column-341148","name":"cdefine36","name_without_path":"cdefine36","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341149","object_id":"column-341149","name":"cdefine37","name_without_path":"cdefine37","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341150","object_id":"column-341150","name":"cinvdefine1","name_without_path":"cinvdefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341151","object_id":"column-341151","name":"cinvdefine2","name_without_path":"cinvdefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341152","object_id":"column-341152","name":"cinvdefine3","name_without_path":"cinvdefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341153","object_id":"column-341153","name":"cinvdefine4","name_without_path":"cinvdefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341154","object_id":"column-341154","name":"cinvdefine5","name_without_path":"cinvdefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341155","object_id":"column-341155","name":"cinvdefine6","name_without_path":"cinvdefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341156","object_id":"column-341156","name":"cinvdefine7","name_without_path":"cinvdefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341157","object_id":"column-341157","name":"cinvdefine8","name_without_path":"cinvdefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341158","object_id":"column-341158","name":"cinvdefine9","name_without_path":"cinvdefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341159","object_id":"column-341159","name":"cinvdefine10","name_without_path":"cinvdefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341160","object_id":"column-341160","name":"cinvdefine11","name_without_path":"cinvdefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341161","object_id":"column-341161","name":"cinvdefine12","name_without_path":"cinvdefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341162","object_id":"column-341162","name":"cinvdefine13","name_without_path":"cinvdefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341163","object_id":"column-341163","name":"cinvdefine14","name_without_path":"cinvdefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341164","object_id":"column-341164","name":"cinvdefine15","name_without_path":"cinvdefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341165","object_id":"column-341165","name":"cinvdefine16","name_without_path":"cinvdefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341166","object_id":"column-341166","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341167","object_id":"column-341167","name":"fprekeepprtnum","name_without_path":"fprekeepprtnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341168","object_id":"column-341168","name":"fprekeepprtqty","name_without_path":"fprekeepprtqty","description":null,"is_pk":false,"is_identity":false,"data_type":"exdecimal: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341169","object_id":"column-341169","name":"ibustypeid","name_without_path":"ibustypeid","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341170","object_id":"column-341170","name":"cbustype","name_without_path":"cbustype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341171","object_id":"column-341171","name":"cfactorycode","name_without_path":"cfactorycode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-341172","object_id":"column-341172","name":"cfactoryname","name_without_path":"cfactoryname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};