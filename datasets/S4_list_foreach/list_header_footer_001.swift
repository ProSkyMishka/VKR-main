import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf001-header"), footer: Text("hf001-footer")) {
                Text("hf001-i1")
                Text("hf001-i2")
                Text("hf001-i3")
            }
        }
    }
}
