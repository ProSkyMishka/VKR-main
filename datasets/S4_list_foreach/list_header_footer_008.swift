import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf008-header"), footer: Text("hf008-footer")) {
                Text("hf008-i1")
                Text("hf008-i2")
                Text("hf008-i3")
            }
        }
    }
}
