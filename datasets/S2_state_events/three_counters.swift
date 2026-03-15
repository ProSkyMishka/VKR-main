import SwiftUI
struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    @State private var c = 0
    var body: some View {
        VStack {
            Text("a:\(a) b:\(b) c:\(c)")
            HStack {
                Button("A+") { a += 1 }
                Button("B+") { b += 1 }
                Button("C+") { c += 1 }
            }
        }
    }
}
