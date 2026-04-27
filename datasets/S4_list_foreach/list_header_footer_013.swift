import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf013-header"), footer: Text("hf013-footer")) {
                Text("hf013-i1")
                Text("hf013-i2")
                Text("hf013-i3")
            }
        }
    }
}
