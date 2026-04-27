import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf017-header"), footer: Text("hf017-footer")) {
                Text("hf017-i1")
                Text("hf017-i2")
                Text("hf017-i3")
            }
        }
    }
}
