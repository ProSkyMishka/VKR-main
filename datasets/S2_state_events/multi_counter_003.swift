import SwiftUI

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    @State private var c = 0

    var body: some View {
        VStack(spacing: 8) {
            Text("mc003-a: \(a)")
            Text("mc003-b: \(b)")
            Text("mc003-c: \(c)")
            HStack {
                Button("mc003-incA") { a += 1 }
                Button("mc003-incB") { b += 2 }
                Button("mc003-incC") { c += 3 }
            }
            HStack {
                Button("mc003-rstA") { a = 0 }
                Button("mc003-rstB") { b = 0 }
                Button("mc003-rstC") { c = 0 }
            }
        }
        .padding()
    }
}
