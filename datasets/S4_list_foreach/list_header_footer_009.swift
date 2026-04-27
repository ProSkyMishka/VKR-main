import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf009-header"), footer: Text("hf009-footer")) {
                Text("hf009-i1")
                Text("hf009-i2")
                Text("hf009-i3")
            }
        }
    }
}
