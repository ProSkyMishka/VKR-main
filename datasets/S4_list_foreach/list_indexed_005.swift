import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(1...10, id: \.self) { k in
                Text("lx005-row \(k)")
            }
        }
    }
}
