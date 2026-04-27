import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: "person.crop.circle.fill")
                .font(.system(size: 72))
                .foregroundColor(.blue)
            VStack(spacing: 2) {
                Text("pc002-name")
                    .font(.title2)
                    .bold()
                Text("pc002-handle")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            Text("pc002-bio short")
                .font(.subheadline)
                .multilineTextAlignment(.center)
                .padding(.horizontal)
            HStack(spacing: 24) {
                VStack { Text("pc002-posts"); Text("\(12)").bold() }
                VStack { Text("pc002-followers"); Text("\(102)").bold() }
                VStack { Text("pc002-likes"); Text("\(1002)").bold() }
            }
        }
        .padding()
    }
}
