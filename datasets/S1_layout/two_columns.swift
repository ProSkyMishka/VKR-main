import SwiftUI
struct ContentView: View {
    var body: some View {
        HStack(spacing: 32) {
            VStack { Text("Col1-A"); Text("Col1-B") }
            VStack { Text("Col2-A"); Text("Col2-B") }
        }.padding(20)
    }
}
