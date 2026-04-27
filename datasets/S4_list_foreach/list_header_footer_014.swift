import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf014-header"), footer: Text("hf014-footer")) {
                Text("hf014-i1")
                Text("hf014-i2")
                Text("hf014-i3")
            }
        }
    }
}
