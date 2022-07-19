class BinaryTree
    attr_accessor :root
    def initialize(node)
        self.root = node
    end

    def find(value)
        return true if root.value === value
        return find_node(root,value)
    end

    def find_node(node,value)
        return if node.nil?
        return true if node.value === value

       found = false
       found = find_node(node.left,value) 
       return found if found == true
       return find_node(node.right,value)
    end
end

 class  Node
   attr_accessor :value, :left, :right 
   
    def initialize(left=nil, right=nil, value=nil)
        self.left = left
        self.right = right
        self.value = value
    end

end

root =Node.new(nil,nil,1)
child = Node.new(nil,nil,2)
root.left = child
bt = BinaryTree.new(root)
puts bt.root.value
puts bt.root.left.value
puts bt.root.right # nil

puts bt.find(6)
