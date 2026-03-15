import SwiftUI

struct ContentView: View {
    @State private var a = 0
    @State private var b = ""
    @State private var flag = false

    var body: some View {
        VStack {
            Text("a: \(a)")
            Text("b: \(b)")
            Text(flag ? "Yes" : "No")
            Button("Update") {
                a += 1
                b = "\(a)"
                flag.toggle()
            }
        }
    }
}
